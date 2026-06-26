import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main>Core Subjects {children}</main>;
};

export default layout;
