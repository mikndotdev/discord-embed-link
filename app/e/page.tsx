export const runtime = "edge";

import {
    DiscordMessage,
    DiscordMessages,
    DiscordEmbed,
} from "@danktuary/react-discord-message";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const title = params.title || "Welcome!";
    const url = params.url || "https://example.com";
    const image = params.image || "https://cdn.mikn.dev/idk/yui.gif";
    const description = params.description || "Edit the fields above, and see how the embed will look here.";
    const color = params.color || "#FF7700";
    const link = `https://embedlink.mikn.dev/e?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&color=${color}`;

    return {
        title,
        description,
        robots: {
            index: false,
        },
        openGraph: {
            images: [
                {
                    url: image,
                },
            ]
        }
    };
}

export default async function Page({
                                           searchParams,
                                       }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const title = params.title || "Welcome!";
    const url = params.url || "https://example.com";
    const image = params.image || "https://cdn.mikn.dev/idk/yui.gif";
    const description = params.description || "Edit the fields above, and see how the embed will look here.";
    const color = params.color || "#FF7700";
    const link = `https://embedlink.mikn.dev/e?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&color=${color}`;
}

