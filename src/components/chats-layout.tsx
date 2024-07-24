"use client";

import { FC, ReactNode } from "react";
import SharedLayout from "./shared-layout";
import ChatSidebar from "@/components/chat-sidebar";

type ChatsLayoutProps = {
  children: ReactNode;
};

export const ChatsLayout: FC<ChatsLayoutProps> = ({ children }) => {
  return (
    <SharedLayout SidebarComponent={() => <ChatSidebar />}>
      {children}
    </SharedLayout>
  );
};

export default ChatsLayout;