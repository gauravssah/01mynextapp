
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <h3>inside wala NavBar</h3>
            {children}
        </>

    );
}
