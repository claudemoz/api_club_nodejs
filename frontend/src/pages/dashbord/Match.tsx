import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

// Define types for the match and its categories
type MatchStatus = "Upcoming" | "Ongoing" | "Completed";
type Match = {
  id: number;
  date: string;
  team1: string;
  team2: string;
  status: MatchStatus;
};

export default function Match() {
  // State for each section of matches
  const [juniorMaleMatches, setJuniorMaleMatches] = useState<Match[]>([
    {
      id: 1,
      date: "2024-11-18",
      team1: "Team A",
      team2: "Team B",
      status: "Upcoming",
    },
    {
      id: 2,
      date: "2024-11-22",
      team1: "Team C",
      team2: "Team D",
      status: "Upcoming",
    },
  ]);

  const [seniorMaleMatches, setSeniorMaleMatches] = useState<Match[]>([
    {
      id: 1,
      date: "2024-11-20",
      team1: "Team E",
      team2: "Team F",
      status: "Upcoming",
    },
    {
      id: 2,
      date: "2024-11-25",
      team1: "Team G",
      team2: "Team H",
      status: "Upcoming",
    },
  ]);

  const [juniorFemaleMatches, setJuniorFemaleMatches] = useState<Match[]>([
    {
      id: 1,
      date: "2024-11-16",
      team1: "Team I",
      team2: "Team J",
      status: "Upcoming",
    },
    {
      id: 2,
      date: "2024-11-19",
      team1: "Team K",
      team2: "Team L",
      status: "Upcoming",
    },
  ]);

  const [seniorFemaleMatches, setSeniorFemaleMatches] = useState<Match[]>([
    {
      id: 1,
      date: "2024-11-21",
      team1: "Team M",
      team2: "Team N",
      status: "Upcoming",
    },
    {
      id: 2,
      date: "2024-11-23",
      team1: "Team O",
      team2: "Team P",
      status: "Upcoming",
    },
  ]);

  const [newMatch, setNewMatch] = useState<Match>({
    id: 0,
    date: "",
    team1: "",
    team2: "",
    status: "Upcoming",
  });

  const statuses: MatchStatus[] = ["Upcoming", "Ongoing", "Completed"];

  const handleAddMatch = (section: string) => {
    const newMatchData = { ...newMatch, id: Date.now() };
    if (section === "juniorMale") {
      setJuniorMaleMatches((prev) => [...prev, newMatchData]);
    } else if (section === "seniorMale") {
      setSeniorMaleMatches((prev) => [...prev, newMatchData]);
    } else if (section === "juniorFemale") {
      setJuniorFemaleMatches((prev) => [...prev, newMatchData]);
    } else if (section === "seniorFemale") {
      setSeniorFemaleMatches((prev) => [...prev, newMatchData]);
    }
    setNewMatch({ id: 0, date: "", team1: "", team2: "", status: "Upcoming" });
  };

  const handleUpdateMatch = (
    section: string,
    id: number,
    updatedMatch: Match
  ) => {
    if (section === "juniorMale") {
      setJuniorMaleMatches((prev) =>
        prev.map((match) => (match.id === id ? updatedMatch : match))
      );
    } else if (section === "seniorMale") {
      setSeniorMaleMatches((prev) =>
        prev.map((match) => (match.id === id ? updatedMatch : match))
      );
    } else if (section === "juniorFemale") {
      setJuniorFemaleMatches((prev) =>
        prev.map((match) => (match.id === id ? updatedMatch : match))
      );
    } else if (section === "seniorFemale") {
      setSeniorFemaleMatches((prev) =>
        prev.map((match) => (match.id === id ? updatedMatch : match))
      );
    }
  };

  return (
    <Card className="p-6">
      <h1 className="text-xl font-bold mb-4">Match Management</h1>

      {/* Form to add new match */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Add a New Match</h2>
        <div className="space-y-4">
          <Input
            placeholder="Match Date"
            value={newMatch.date}
            onChange={(e) => setNewMatch({ ...newMatch, date: e.target.value })}
          />
          <Input
            placeholder="Team 1"
            value={newMatch.team1}
            onChange={(e) =>
              setNewMatch({ ...newMatch, team1: e.target.value })
            }
          />
          <Input
            placeholder="Team 2"
            value={newMatch.team2}
            onChange={(e) =>
              setNewMatch({ ...newMatch, team2: e.target.value })
            }
          />
          <Select
            value={newMatch.status}
            onValueChange={(value) =>
              setNewMatch({ ...newMatch, status: value as MatchStatus })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex space-x-2">
            <Button onClick={() => handleAddMatch("juniorMale")}>
              Add to Junior Male
            </Button>
            <Button onClick={() => handleAddMatch("seniorMale")}>
              Add to Senior Male
            </Button>
            <Button onClick={() => handleAddMatch("juniorFemale")}>
              Add to Junior Female
            </Button>
            <Button onClick={() => handleAddMatch("seniorFemale")}>
              Add to Senior Female
            </Button>
          </div>
        </div>
      </div>

      {/* Junior Male Matches */}
      <SectionTable
        title="Junior Male Matches"
        matches={juniorMaleMatches}
        handleUpdateMatch={handleUpdateMatch}
        section="juniorMale"
      />

      {/* Senior Male Matches */}
      <SectionTable
        title="Senior Male Matches"
        matches={seniorMaleMatches}
        handleUpdateMatch={handleUpdateMatch}
        section="seniorMale"
      />

      {/* Junior Female Matches */}
      <SectionTable
        title="Junior Female Matches"
        matches={juniorFemaleMatches}
        handleUpdateMatch={handleUpdateMatch}
        section="juniorFemale"
      />

      {/* Senior Female Matches */}
      <SectionTable
        title="Senior Female Matches"
        matches={seniorFemaleMatches}
        handleUpdateMatch={handleUpdateMatch}
        section="seniorFemale"
      />
    </Card>
  );
}

interface SectionTableProps {
  title: string;
  matches: Match[];
  handleUpdateMatch: (section: string, id: number, updatedMatch: Match) => void;
  section: string;
}

const SectionTable = ({
  title,
  matches,
  handleUpdateMatch,
  section,
}: SectionTableProps) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold">{title}</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Match</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Teams</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matches.map((match) => (
          <TableRow key={match.id}>
            <TableCell>{`Match #${match.id}`}</TableCell>
            <TableCell>{match.date}</TableCell>
            <TableCell>{`${match.team1} vs ${match.team2}`}</TableCell>
            <TableCell>{match.status}</TableCell>
            <TableCell>
              <Button
                onClick={() =>
                  handleUpdateMatch(section, match.id, {
                    ...match,
                    status:
                      match.status === "Upcoming" ? "Ongoing" : "Completed",
                  })
                }
              >
                {match.status === "Upcoming" ? "Start Match" : "Finish Match"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
