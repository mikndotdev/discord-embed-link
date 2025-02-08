"use client";
import { useState, useEffect } from "react";
import {
    DiscordMessage,
    DiscordMessages,
    DiscordEmbed,
} from "@danktuary/react-discord-message";
import { encodeURIComponent } from 'js-base64';
import { CirclePicker } from "react-color";
import { toast } from "sonner";

import hiiragi from "./assets/hiiragi.gif"

export default function Home() {
    const [title, setTitle] = useState("Welcome!");
    const [url, setUrl] = useState("https://example.com");
    const [image, setImage] = useState("https://cdn.mikn.dev/idk/yui.gif");
    const [description, setDescription] = useState(
        "Edit the fields above, and see how the embed will look here.",
    );
    const [color, setColor] = useState("#FF7700");
    const [link, setLink] = useState("https://embedlink.mikn.dev/e");

    const copyLink = () => {
        navigator.clipboard.writeText(link);
        toast.success("Copied link to clipboard!");
    }

    useEffect(() => {
        setLink(`https://embedlink.mikn.dev/e?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&color=${color}`);
    }, [title, url, image, description]);

    return (
        <main className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col md:flex-row w-full max-w-5xl p-4 space-y-4 md:space-y-0 md:space-x-4">
                {/* Input Section */}
                <div className="md:w-1/2 flex flex-col items-center bg-gray-600 rounded-lg p-4 space-y-6">
                    <h1 className="text-2xl font-bold text-center text-white">
                        Link to Discord Embed
                    </h1>
                    <input
                        type="text"
                        placeholder="Embed Title"
                        className="input w-full max-w-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Embed Description"
                        className="input w-full max-w-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Embed URL"
                        className="input w-full max-w-md"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        className="input w-full max-w-md"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <h3 className="font-bold text-md text-white">
                        Pick a colour for your embed
                    </h3>
                    <CirclePicker
                        color={color}
                        onChange={(color: any) => setColor(color.hex)}
                        className="w-full"
                    />
                    <div>
                        <button className="btn btn-success text-white" onClick={copyLink}>
                            Copy URL
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center bg-gray-600 rounded-lg p-4">
                    <div className="w-full max-w-md">
                        <DiscordMessages>
                            <DiscordMessage author="example" avatar={hiiragi.src}>
                                https://embedlink.mikn.dev/e/
                                <DiscordEmbed
                                    slot="embeds"
                                    title={title}
                                    image={image}
                                    url={url}
                                    color={color}
                                >
                                    {description}
                                </DiscordEmbed>
                            </DiscordMessage>
                        </DiscordMessages>
                    </div>
                </div>
            </div>
        </main>
    );
}
