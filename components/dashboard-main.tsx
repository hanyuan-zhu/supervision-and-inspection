"use client"

import { AlertCircle, Calendar, ClipboardList, FileCheck, FileText } from "lucide-react"
import { DashboardPanel, DashboardTabs, DashboardTabContent } from "./dashboard-panel"
import { DashboardOverview } from "./dashboard/overview"
import { IssuesList } from "./dashboard/issues-list"
import { DocumentsList } from "./dashboard/documents-list"
import { SupervisionList } from "./dashboard/supervision-list"
import { DailyLogs } from "./dashboard/daily-logs"
import { MeetingMinutes } from "./dashboard/meeting-minutes"

export function DashboardMain() {
  const tabs = [
    {
      id: "overview",
      label: "概览",
      icon: AlertCircle,
    },
    {
      id: "issues",
      label: "问题记录",
      icon: AlertCircle,
    },
    {
      id: "documents",
      label: "已生成文档",
      icon: FileText,
    },
    {
      id: "supervision",
      label: "旁站记录",
      icon: ClipboardList,
    },
    {
      id: "daily-logs",
      label: "监理日志",
      icon: Calendar,
    },
    {
      id: "meeting-minutes",
      label: "会议纪要",
      icon: FileCheck,
    },
  ]

  return (
    <DashboardPanel>
      <DashboardTabs tabs={tabs} defaultValue="overview">
        <DashboardTabContent value="overview">
          <DashboardOverview />
        </DashboardTabContent>

        <DashboardTabContent value="issues">
          <IssuesList />
        </DashboardTabContent>

        <DashboardTabContent value="documents">
          <DocumentsList />
        </DashboardTabContent>

        <DashboardTabContent value="supervision">
          <SupervisionList />
        </DashboardTabContent>

        <DashboardTabContent value="daily-logs">
          <DailyLogs />
        </DashboardTabContent>

        <DashboardTabContent value="meeting-minutes">
          <MeetingMinutes />
        </DashboardTabContent>
      </DashboardTabs>
    </DashboardPanel>
  )
}
