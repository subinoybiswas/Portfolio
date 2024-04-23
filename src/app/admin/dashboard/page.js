"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [commitData, setCommitData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch analytics data
        const analyticsResponse = await fetch("/api/get-analytics", {
          method: "POST",
        });
        if (!analyticsResponse.ok) {
          throw new Error(`HTTP error! status: ${analyticsResponse.status}`);
        }
        const analyticsData = await analyticsResponse.json();
        setData(analyticsData.metricData);
        console.log(analyticsData);

        // Fetch GitHub data
        const githubResponse = await fetch("/api/github", { method: "POST" });
        const githubData = await githubResponse.json();
        const dataArray = githubData.data.map((data) => ({
          shortSha: data.sha.substring(0, 7),
          fullSha: data.sha,
          commitUrl: data.html_url,
          commitMessage: data.commit.message,
          committerLink: data.committer.html_url,
          committerName: data.committer.login,
          committerAvatar: data.committer.avatar_url,
        }));
        setCommitData(dataArray.slice(0, 10));
        console.log(dataArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { push } = useRouter();

  const goal = {
    totalUsers: 2000,
    averageSessionDuration: 500,
    active7DayUsers: 200,
    activeUsers: 100,
    eventCount: 500,
    newUsers: 500,
  };

  if (loading)
    return (
      <div className="grid place-items-center h-[80vh]">
        <div className="grid place-items-center">
          <LoaderIcon className="animate-spin" size={50} />
        </div>
      </div>
    );
  return (
    <main className="grid flex-1 items-start gap-4 p-4 lg:grid-cols-3 ">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {!loading &&
            data.map((metric, index) => {
              const goalValue = goal[metric.fieldName];
              return (
                <Card
                  x-chunk="dashboard-05-chunk-1"
                  className="min-h-[200px] flex flex-col gap-2"
                  key={index}
                >
                  <CardHeader className="pb-2 gap-2">
                    <CardDescription>{metric.fieldName}</CardDescription>
                    <CardTitle className="text-4xl">
                      {Number(metric.value).toFixed(2)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{}</CardContent>
                  <CardFooter>
                    <Progress
                      value={
                        (Number(metric.value).toFixed(2) / goalValue) * 100
                      }
                      aria-label="25% increase"
                    />
                  </CardFooter>
                </Card>
              );
            })}
        </div>
      </div>

      {!loading && (
        <Table>
          <TableCaption>A list of the commits </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Commit</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>User</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {commitData.map((commit, index) => (
              <>
                <TableRow>
                  <TableCell
                    className="font-medium cursor-pointer"
                    onClick={() => window.open(commit.commitUrl, "_blank")}
                  >
                    {commit.shortSha}
                  </TableCell>
                  <TableCell>{commit.commitMessage}</TableCell>
                  <TableCell>
                    <Avatar
                      className="cursor-pointer"
                      onClick={() =>
                        window.open(commit.committerLink, "_blank")
                      }
                    >
                      <AvatarImage src={commit.committerAvatar} />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      )}
    </main>
  );
}
