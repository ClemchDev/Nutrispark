import { Metadata } from "next";

export function generateMetadata({params}: {params: { name: string}}): Metadata {
  const title = `Discover ${params.name} - Nutrispark`;
  const description = `Learn all about the nutritionnal values of ${params.name} on Nutrispark. Explore now!`;

    return {title, description}
};

export default function FoodLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )

};