// pages/api/createUser.js

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        // Initialize Prisma Client
        const prisma = new PrismaClient();

        try {
            // Create user in database
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                },
            });

            // Close Prisma Client
            await prisma.$disconnect();

            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Error creating user' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
