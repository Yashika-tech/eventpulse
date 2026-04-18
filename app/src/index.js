const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const events = [];

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

app.get('/events', (req, res) => {
  res.json({ count: events.length, events });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.delete('/events', (req, res) => {
  events.length = 0;
  res.json({ message: 'All events cleared' });
});

app.get('/events/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json({ event });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`EventPulse running on port ${PORT}`);
  });
}

module.exports = app;
