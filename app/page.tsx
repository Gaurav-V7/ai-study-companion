"use client";

import { useState } from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  TextField,
  CircularProgress,
  Box,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SendIcon from "@mui/icons-material/Send";
import { ApiEndpoints } from "./constants/apiEndpoints";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [asking, setAsking] = useState(false);

  const upload = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(ApiEndpoints.upload, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setResult(data.result || data.data);
    setText(data.text || "");
    setLoading(false);
  };

  const ask = async () => {
    if (!question) return;

    setAsking(true);

    const res = await fetch(ApiEndpoints.ask, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, context: text }),
    });

    const data = await res.json();

    setAnswer(data.result);
    setAsking(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        📘 AI Study Companion
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Upload notes (image/PDF) and get explanation, key points & quiz.
      </Typography>

      {/* Upload Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h6">Upload Notes</Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadFileIcon />}
            >
              Choose File
              <input
                hidden
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </Button>

            <Typography variant="body2" color="text.secondary">
              {file ? file.name : "No file selected"}
            </Typography>

            <Button
              variant="contained"
              onClick={upload}
              disabled={loading || !file}
            >
              {loading ? <CircularProgress size={24} /> : "Upload"}
            </Button>
          </Stack>
        </Stack>
      </Paper>

      {/* Result Section */}
      {result && (
        <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom>
            📖 AI Explanation
          </Typography>

          <Box
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            {result}
          </Box>
        </Paper>
      )}

      {/* Ask Section */}
      {result && (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom>
            💬 Ask Follow-up
          </Typography>

          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              placeholder="Ask something about your notes..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <Button
              variant="contained"
              onClick={ask}
              disabled={asking}
              endIcon={<SendIcon />}
            >
              {asking ? <CircularProgress size={20} /> : "Ask"}
            </Button>
          </Stack>

          {answer && (
            <Box mt={3}>
              <Typography variant="subtitle1" gutterBottom>
                Answer:
              </Typography>

              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  backgroundColor: "#f9f9f9",
                  whiteSpace: "pre-wrap",
                }}
              >
                {answer}
              </Paper>
            </Box>
          )}
        </Paper>
      )}
    </Container>
  );
}
