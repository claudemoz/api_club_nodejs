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

// Define types for news category
type NewsCategory = "match" | "formation" | "club";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: NewsCategory;
  summary: string;
  content: string;
}

export default function News() {
  const [newsList, setNewsList] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Match Winner",
      date: "2024-11-10",
      category: "match",
      summary: "Team A won the match",
      content: "Full match details here",
    },
    {
      id: 2,
      title: "New Training Program",
      date: "2024-11-12",
      category: "formation",
      summary: "New program for youth",
      content: "Full training details here",
    },
  ]);

  const [newNews, setNewNews] = useState<NewsItem>({
    id: 0,
    title: "",
    date: "",
    category: "match",
    summary: "",
    content: "",
  });

  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  const categories: NewsCategory[] = ["match", "formation", "club"];

  const handleAddNews = () => {
    const newNewsData = { ...newNews, id: Date.now() };
    setNewsList((prev) => [...prev, newNewsData]);
    setNewNews({
      id: 0,
      title: "",
      date: "",
      category: "match",
      summary: "",
      content: "",
    });
  };

  const handleUpdateNews = (updatedNews: NewsItem) => {
    setNewsList((prev) =>
      prev.map((news) => (news.id === updatedNews.id ? updatedNews : news))
    );
    setEditingNews(null);
  };

  const handleEditNews = (news: NewsItem) => {
    setEditingNews(news);
    setNewNews(news); // Pre-fill the form with the existing news data
  };

  return (
    <Card className="p-6">
      <h1 className="text-xl font-bold mb-4">News Management</h1>

      {/* Form to add or edit news */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          {editingNews ? "Edit News" : "Add New News"}
        </h2>
        <div className="space-y-4">
          <Input
            placeholder="Title"
            value={newNews.title}
            onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
          />
          <Input
            placeholder="Date"
            value={newNews.date}
            onChange={(e) => setNewNews({ ...newNews, date: e.target.value })}
          />
          <Select
            value={newNews.category}
            onValueChange={(value) =>
              setNewNews({ ...newNews, category: value as NewsCategory })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="Summary"
            value={newNews.summary}
            onChange={(e) =>
              setNewNews({ ...newNews, summary: e.target.value })
            }
          />
          <Input
            placeholder="Content"
            value={newNews.content}
            onChange={(e) =>
              setNewNews({ ...newNews, content: e.target.value })
            }
          />
          <div className="flex space-x-2">
            {editingNews ? (
              <Button onClick={() => handleUpdateNews(newNews)}>
                Save Changes
              </Button>
            ) : (
              <Button onClick={handleAddNews}>Add News</Button>
            )}
          </div>
        </div>
      </div>

      {/* News Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {newsList.map((news) => (
            <TableRow key={news.id}>
              <TableCell>{news.title}</TableCell>
              <TableCell>{news.date}</TableCell>
              <TableCell>
                {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
              </TableCell>
              <TableCell>
                <Button onClick={() => handleEditNews(news)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
