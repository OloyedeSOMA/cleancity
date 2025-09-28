import { useEffect, useState } from "react";
import { Card, Row, Col, Modal, Button, Badge } from "react-bootstrap";

const categories = [
  { name: "Plastic", icon: "♻️", color: "primary" },
  { name: "Paper", icon: "📄", color: "warning" },
  { name: "Glass", icon: "🍷", color: "secondary" },
  { name: "Organic", icon: "🍂", color: "success" },
  { name: "E-waste", icon: "💻", color: "danger" },
  { name: "Metals", icon: "⚙️", color: "info" },
];

const AchievementsBadges = ({ logs }) => {
  const [progress, setProgress] = useState({});
  const [unlocked, setUnlocked] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [unlockedCategory, setUnlockedCategory] = useState("");

  useEffect(() => {
    if (!logs) return;
    const counts = {};

    logs.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + parseInt(item.quantity);
    });

    setProgress(counts);

    const unlockedBadges = {};
    categories.forEach((cat) => {
      if (counts[cat.name] >= 5) {
        if (!unlocked[cat.name]) {
          setUnlockedCategory(cat.name);
          setShowModal(true);
        }
        unlockedBadges[cat.name] = true;
      }
    });

    setUnlocked(unlockedBadges);
  }, [logs]);

  const unlockedCount = Object.keys(unlocked).length;

  return (
    <>
      {/* Progress Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded shadow-sm">
        <h5 className="mb-0 fw-bold text-success">
          {unlockedCount} / {categories.length} Badges Unlocked
        </h5>
        <div>
          {Object.keys(unlocked).map((badge, index) => (
            <Badge key={index} bg="success" className="me-2">
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      {/* Badges Grid */}
      <Row className="g-3">
        {categories.map((cat, index) => {
          const count = progress[cat.name] || 0;
          const isUnlocked = unlocked[cat.name] || false;
          return (
            <Col xs={6} md={4} key={index}>
              <Card
                className={`text-center border-${isUnlocked ? cat.color : "light"}`}
                style={{
                  opacity: isUnlocked ? 1 : 0.5,
                  transition: "0.3s",
                  minHeight: "150px",
                }}
              >
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>{cat.icon}</div>
                  <h6>{cat.name} Beginner</h6>
                  <p className="mb-1">{count}/5 items recycled</p>
                  <div className="progress" style={{ height: "6px", background: "#e9ecef" }}>
                    <div
                      className={`progress-bar bg-${cat.color}`}
                      role="progressbar"
                      style={{ width: `${Math.min((count / 5) * 100, 100)}%` }}
                    ></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Congratulations Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🎉 Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You’ve unlocked the <b>{unlockedCategory}</b> badge! Keep recycling to earn more
          achievements.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Awesome!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AchievementsBadges;

