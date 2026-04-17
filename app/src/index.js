**`app/src/index.js`**
```javascript
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const events = []; // In-memory store

// POST /events — publish an event
app.post('/events', (req, res) => {
  const { type, payload } = req.body;

  if (!type) {
    return res.status(400).json({ error: 'Event type is required' });
  }

  const event = {
    id: `evt_${Date.now()}`,
    type,
    payload: payload || {},
    timestamp: new Date().toISOString(),
    processed: true,
  };

  events.push(event);
  console.log(`[EVENT] ${event.type} — ${event.id}`);

  res.status(201).json({ message: 'Event accepted', event });
});

// GET /events — list all events
app.get('/events', (req, res) => {
  res.json({ count: events.length, events });
});

// GET /health — health check for K8s
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`EventPulse running on port ${PORT}`);
});

module.exports = app;
```
