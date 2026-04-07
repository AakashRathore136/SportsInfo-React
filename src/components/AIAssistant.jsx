import { useMemo, useState } from 'react';

function getAssistantReply(input) {
  const text = input.toLowerCase();

  if (text.includes('cricket')) {
    return "Cricket is a bat-and-ball game played between two teams. Visit our assessment and learning sections to go deeper.";
  }
  if (text.includes('football') || text.includes('soccer')) {
    return "Football is the world's most popular sport. Explore tactics, formations, and legends from our learning pages.";
  }
  if (text.includes('basketball') || text.includes('basket')) {
    return 'Basketball is a fast-paced indoor sport. You can test your knowledge in our assessment section.';
  }
  if (text.includes('golf')) {
    return 'Golf is a precision sport focused on technique and consistency. Check our learning content for fundamentals.';
  }
  if (text.includes('language') || text.includes('hindi') || text.includes('tamil')) {
    return 'The app currently uses the English flow. Start from Home and continue with Login.';
  }
  if (text.includes('assessment') || text.includes('quiz') || text.includes('test')) {
    return 'Open the Assessment page to answer 15 sports questions and instantly view detailed results.';
  }
  if (text.includes('login') || text.includes('register') || text.includes('account')) {
    return 'Use Login or Register first, then continue to the Sports hub before taking the assessment.';
  }
  if (text.includes('about')) {
    return 'SportsInfo helps learners understand Cricket, Football, Basketball, and Golf through easy guides and quizzes.';
  }
  if (text.match(/^(hi|hello|hey|namaste)/)) {
    return 'Hello! Ask me about sports topics, assessments, login/registration, or site navigation.';
  }
  if (text.includes('thank')) {
    return "You're welcome!";
  }
  if (text.includes('bye')) {
    return 'Goodbye! Come back anytime.';
  }

  return 'I can help with sports topics, assessments, and navigating this SportsInfo app. Ask me anything.';
}

function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I'm your sports info assistant. Ask me anything!" }
  ]);

  const canSend = useMemo(() => value.trim().length > 0, [value]);

  const sendMessage = () => {
    const message = value.trim();
    if (!message) return;

    setMessages((prev) => [...prev, { sender: 'user', text: message }]);
    setValue('');

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: getAssistantReply(message) }]);
    }, 400);
  };

  return (
    <>
      <button className="ai-assistant-btn" id="aiAssistantBtn" title="AI Assistant" onClick={() => setOpen((v) => !v)}>
        🤖
      </button>

      <div className={`ai-popup ${open ? 'active' : ''}`} id="aiPopup">
        <div className="ai-popup-header">
          <h3>🤖 AI Assistant</h3>
          <button className="ai-close-btn" id="aiCloseBtn" onClick={() => setOpen(false)}>
            x
          </button>
        </div>
        <div className="ai-popup-body">
          <div className="ai-chat-box" id="aiChatBox">
            {messages.map((msg, idx) => (
              <div key={`${msg.sender}-${idx}`} className={`ai-message ai-${msg.sender}-message`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="ai-input-area">
            <input
              type="text"
              className="ai-text-input"
              id="aiTextInput"
              placeholder="Type your question..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
            />
            <button className="ai-send-btn" id="aiSendBtn" disabled={!canSend} onClick={sendMessage}>
              Send
            </button>
          </div>
          <div className="ai-status" id="aiStatus" />
        </div>
      </div>
    </>
  );
}

export default AIAssistant;
