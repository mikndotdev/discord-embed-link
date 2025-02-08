"use client";
import { useState, useEffect } from "react";
import {
    DiscordMessage,
    DiscordMessages,
    DiscordEmbed,
} from "@danktuary/react-discord-message";

import hiiragi from "./assets/hiiragi.gif"

export default function Home() {
    const [title, setTitle] = useState("Welcome!");
    const [url, setUrl] = useState("https://example.com");
    const [image, setImage] = useState("https://cdn.mikn.dev/idk/yui.gif");
    const [description, setDescription] = useState(
        "Edit the fields above, and see how the embed will look here.",
    );
    const [link, setLink] = useState("");

    useEffect(() => {
        // You can add any side-effect logic here that depends on the state variables.
        // For example, you could update the document title or perform some calculations.
        console.log("State variables changed:", { title, url, image, description });
    }, [title, url, image, description]);

    return (
        <main>
            <div className="flex flex-row justify-center items-center">
                <div className="card w-1/2 min-h-96 bg-gray-600 rounded-lg mt-10 flex flex-col justify-center items-center space-y-5">
                    <h1 className="text-4xl font-bold text-center text-white mt-5">
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
                    <div className="min-w-2/3">
                        <DiscordMessages>
                            <DiscordMessage author="example" avatar={hiiragi.src}>
                                {link}
                                <DiscordEmbed
                                    slot="embeds"
                                    title={title}
                                    image={image}
                                    url={url}
                                >
                                    {description}
                                </DiscordEmbed>
                            </DiscordMessage>
                        </DiscordMessages>
                    </div>
                    <div className="mb-10"/>
                </div>
            </div>
        </main>
    );
}
