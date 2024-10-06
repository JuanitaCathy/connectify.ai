"use client";

import { CodesProvider, useCodesContext } from "@/lib/codes/codes-provider";
import { Code } from "@/lib/codes/types";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Chat from "./chat";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";

function CodesComponent() {
    const { codes, createCode, updateCode, deleteCode } = useCodesContext();
    const emptyCode: Code = { id: "", title: "", content: "" };
    const [newCode, setNewCode] = useState<Code>(emptyCode);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState<Code | null>(null);

    const handleCreateCode = () => {
        createCode({ ...newCode, id: Math.random().toString() });
        setIsCreateModalOpen(false);
        setNewCode(emptyCode);
    };

    const handleEditCode = () => {
        if (selectedCode) {
            updateCode(selectedCode.id, selectedCode);
            setIsEditModalOpen(false);
        }
    };

    const handleDeleteCode = (id: string) => {
        deleteCode(id);
        setSelectedCode(null);
    };

    useCopilotReadable({
        description: "Programming languages list.",
        value: JSON.stringify(codes),
    });

    useCopilotAction({
        name: "Create a Programming Language Entry",
        description: "Adds a programming language to the list.",
        parameters: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "string", required: true },
        ],
        handler: (args) => {
            const newEntry: Code = {
                id: Math.random().toString(),
                title: args.title as string,
                content: args.content as string,
            };
            createCode(newEntry);
            console.log("Programming language added", newEntry);
        },
    });

    return (
        <div className="min-h-screen p-12 bg-gray-900 text-white">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-100">
                    Code Room!
                </h1>
                <p className="text-lg text-gray-300 mt-2">
                    Generate or Add Code Snippets while discussion on call :)
                </p>
            </header>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {codes.map((code) => (
                    <Card
                        key={code.id}
                        className="bg-gray-800 border border-white shadow-lg transition-all hover:scale-105"
                    >
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">{code.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="whitespace-pre-wrap overflow-auto text-gray-400">
                                <code>{code.content}</code>
                            </pre>
                        </CardContent>
                        <div className="flex justify-between p-4">
                            <Button
                                onClick={() => {
                                    setSelectedCode(code);
                                    setIsEditModalOpen(true);
                                }}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => handleDeleteCode(code.id)}
                                className="bg-red-600 hover:bg-red-700"
                            >
                                <Trash className="h-4 w-4" />
                            </Button>
                        </div>
                    </Card>
                ))}
            </motion.div>

            <Button
                onClick={() => setIsCreateModalOpen(true)}
                className="mt-6 mb-32 text-xl bg-white-600 hover:bg-white-700"
                size="lg"
            >
                + Create Code Snip!
            </Button>

            {/* Create Modal */}
            <AnimatePresence>
                {isCreateModalOpen && (
                    <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create your Code Snippet</DialogTitle>
                            </DialogHeader>
                            <Input
                                placeholder="Language Title"
                                value={newCode.title}
                                onChange={(e) => setNewCode({ ...newCode, title: e.target.value })}
                                className="mb-4 bg-gray-700 text-white"
                            />
                            <Textarea
                                placeholder="Code Snippet"
                                value={newCode.content}
                                onChange={(e) => setNewCode({ ...newCode, content: e.target.value })}
                                className="mb-4 bg-gray-700 text-white"
                            />
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={handleCreateCode}>Add Language</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>

            {/* Edit Modal */}
            <AnimatePresence>
                {isEditModalOpen && selectedCode && (
                    <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit {selectedCode.title}</DialogTitle>
                            </DialogHeader>
                            <Input
                                value={selectedCode.title}
                                onChange={(e) =>
                                    setSelectedCode({ ...selectedCode, title: e.target.value })
                                }
                                className="mb-4 bg-gray-700 text-white"
                            />
                            <Textarea
                                value={selectedCode.content}
                                onChange={(e) =>
                                    setSelectedCode({ ...selectedCode, content: e.target.value })
                                }
                                className="mb-4 bg-gray-700 text-white"
                            />
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={handleEditCode}>Save Changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
            <Chat />
        </div>
    );
}

export default function Page() {
    return (
        <CodesProvider>
            <CodesComponent />
        </CodesProvider>
    );
}
