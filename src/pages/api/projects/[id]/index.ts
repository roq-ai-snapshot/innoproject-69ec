import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { projectValidationSchema } from 'validationSchema/projects';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.project
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getProjectById();
    case 'PUT':
      return updateProjectById();
    case 'DELETE':
      return deleteProjectById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getProjectById() {
    const data = await prisma.project.findFirst(convertQueryToPrismaUtil(req.query, 'project'));
    return res.status(200).json(data);
  }

  async function updateProjectById() {
    await projectValidationSchema.validate(req.body);
    const data = await prisma.project.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deleteProjectById() {
    const data = await prisma.project.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
