"use server";

import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function onAuthenticatedUser() {
  try {
    const user = await currentUser();

    if (!user) {
      return {
        status: 401,
        user: null,
      };
    }

    const userExists = await client.user.findUnique({
      where: { clerkid: user.id },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
      },
    });

    if (userExists)
      return {
        status: 200,
        user: userExists,
      };

    const newUser = await client.user.create({
      data: {
        clerkid: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstname: user.firstName,
        lastname: user.lastName,
        image: user.imageUrl,
        studio: {
          create: {},
        },
        subscription: {
          create: {},
        },
        workspace: {
          create: {
            name: `${user.firstName}'s Workspace`,
            type: "PERSONAL",
          },
        },
      },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (newUser)
      return {
        status: 201,
        user: newUser,
      };

    return {
      status: 400,
      user: null,
    };
  } catch (error) {
    return {
      status: 500,
      user: null,
    };
  }
}
