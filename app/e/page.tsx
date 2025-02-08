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
    const title = (typeof params.title === 'string' ? params.title : params.title?.[0]) || "Welcome!";
    const image = (typeof params.image === 'string' ? params.image : params.image?.[0]) || "https://cdn.mikn.dev/idk/yui.gif";
    const description = (typeof params.description === 'string' ? params.description : params.description?.[0]) || "Edit the fields above, and see how the embed will look here.";

    return {
        title: title,
        description: description,
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

export async function generateViewport({
                                           searchParams,
                                       }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const color = (typeof params.color === 'string' ? params.color : params.color?.[0]) || "#FF7700";

    return {
        themeColor: color,
    };
}

import hiiragi from "../app/assets/hiiragi.gif";

export default async function Page({
                                           searchParams,
                                       }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const title = (typeof params.title === 'string' ? params.title : params.title?.[0]) || "Welcome!";
    const url = (typeof params.url === 'string' ? params.url : params.url?.[0]) || "https://example.com";
    const image = (typeof params.image === 'string' ? params.image : params.image?.[0]) || "https://cdn.mikn.dev/idk/yui.gif";
    const description = (typeof params.description === 'string' ? params.description : params.description?.[0]) || "Edit the fields above, and see how the embed will look here.";
    const color = (typeof params.color === 'string' ? params.color : params.color?.[0]) || "#FF7700";

    return (
        <main className="flex justify-center items-center min-h-screen">
            <div className="flex justify-center items-center bg-gray-600 rounded-lg p-4">
                <div className="w-full max-w-md">
                    <DiscordMessages>
                        <DiscordMessage
                            author="example"
                            avatar={hiiragi.src}
                        >
                            https://embedlink.mikn.dev/e/example
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
        </main>
    )
}

