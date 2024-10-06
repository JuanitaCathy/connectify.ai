import { NextRequest } from "next/server";

let rooms: {
    id: number; // Simple ID generation
    name: any; description: any;
}[] = []; // Temporary in-memory storage (for demo purposes)

export const GET = async (req: NextRequest) => {
    return new Response(JSON.stringify(rooms), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const POST = async (req: NextRequest) => {
    const { name, description } = await req.json();
    const newRoom = {
        id: rooms.length + 1, // Simple ID generation
        name,
        description,
    };
    rooms.push(newRoom);
    return new Response(JSON.stringify(newRoom), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
