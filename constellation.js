// Dream survey data
const dreamData = [
  {
    emotion: "Anxious/Stressed",
    description: "I'm not sure — it just felt… significant",
    content: "I suddenly wake up in an exam hall and I didn't study for it",
    characteristic: "significant",
    name: "Exam anxiety",
  },
  {
    emotion: "Confused/Disoriented",
    description: "I'm not sure — it just felt… significant",
    content: "Deja vu",
    characteristic: "significant",
  },
  {
    emotion: "Confused/Disoriented",
    description: "It felt random or meaningless",
    content:
      "With friends doing random things, memory is fuzzy so i don't fully remember",
    characteristic: "random",
  },
  {
    emotion: "Confused/Disoriented",
    description: "It felt random or meaningless",
    content: "Me in a zombie apocalypse",
    characteristic: "random",
    name: "raaaa gggghhhh rr",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It only happens when I feel a certain way",
    content:
      "usually it will be about whatever i am stressed about and me making it worse",
    characteristic: "conditional",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It symbolized something I was going through",
    content: "i was driving a car that could not brake",
    characteristic: "symbolic",
    name: "DRIVING IS SO SCARY",
  },
  {
    emotion: "Adventurous/fun",
    description: "It symbolized something I was going through",
    content: "flying through mountains and hills",
    characteristic: "symbolic",
    name: "superpowers!",
  },
  {
    emotion: "Fearful/Threatened",
    description: "It only happens when I feel a certain way",
    content: "being trapped",
    characteristic: "conditional",
    name: "stuck",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It symbolized something I was going through",
    content: "crying and hiccuping too much and i can't talk",
    characteristic: "symbolic",
  },
  {
    emotion: "Surprised/Curious",
    description: "I'm not sure — it just felt… significant",
    content: "sweaty,wetty",
    characteristic: "significant",
  },
  {
    emotion: "Fearful/Threatened",
    description: "It felt random or meaningless",
    content: "Hiding frm someone in my old house",
    characteristic: "random",
    name: "Thrilling",
  },
  {
    emotion: "Happy/Relieved",
    description: "It felt random or meaningless",
    content: "Ex-girlfriend",
    characteristic: "random",
    name: "desire",
  },
  {
    emotion: "Happy/Relieved",
    description: "I'm not sure — it just felt… significant",
    content: "Getting chased by something big",
    characteristic: "significant",
    name: "🏃‍♂️💨",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It predicted something that later happened",
    content: "I think it was about me chasing something but never reaching it",
    characteristic: "predictive",
  },
  {
    emotion: "Happy/Relieved",
    description: "It only happens when I feel a certain way",
    content: "My relationship with a boy",
    characteristic: "conditional",
    name: "What will we be like?",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It only happens when I feel a certain way",
    content:
      "You see your family running away from something chasing you and your legs are too heavy to move",
    characteristic: "conditional",
    name: "When life drags you down",
  },
  {
    emotion: "In love",
    description: "It only happens when I feel a certain way",
    content:
      "A very persistant in love feeling with an indescribable person. Kind of like a painful ache even",
    characteristic: "conditional",
  },
  {
    emotion: "Confused/Disoriented",
    description: "It felt random or meaningless",
    content:
      "Lost my glasses on a cruise ship, the boat was sinking and random people threw me overboard. When i hit the water it was sand",
    characteristic: "random",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It symbolized something I was going through",
    content: "mainly about work or other things im going through",
    characteristic: "symbolic",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It only happens when I feel a certain way",
    content: "Panic,Unprepared",
    characteristic: "conditional",
    name: "Just gotta get through it",
  },
  {
    emotion: "Fearful/Threatened",
    description: "I'm not sure — it just felt… significant",
    content: "Fear",
    characteristic: "significant",
    name: "Hide",
  },
  {
    emotion: "Confused/Disoriented",
    description: "It felt random or meaningless",
    content: "In a fog",
    characteristic: "random",
    name: "puzzled",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It symbolized something I was going through",
    content: "Don't be caught",
    characteristic: "symbolic",
    name: "My hidden space",
  },
  {
    emotion: "Shock",
    description: "It only happens when I feel a certain way",
    content: "Fall into a hole",
    characteristic: "conditional",
    name: "Black hole",
  },
  {
    emotion: "Happy/Relieved",
    description: "It felt random or meaningless",
    content: "You can't catch me",
    characteristic: "random",
    name: "Super power",
  },
  {
    emotion: "Sad/Lonely",
    description: "It predicted something that later happened",
    content: "partner breaking up with me",
    characteristic: "predictive",
  },
  {
    emotion: "Fearful/Threatened",
    description: "It symbolized something I was going through",
    content: "someone chasing me",
    characteristic: "symbolic",
  },
  {
    emotion: "Happy/Relieved",
    description: "It symbolized something I was going through",
    content: "Joyful moments with loved ones",
    characteristic: "symbolic",
    name: "Vacation with Kpop Idols",
  },
  {
    emotion: "Fearful/Threatened",
    description: "It felt random or meaningless",
    content: "Monster chasing me up the stairs from the basement",
    characteristic: "random",
  },
  {
    emotion: "Anxious/Stressed",
    description: "It symbolized something I was going through",
    content:
      "Fear going somewhere get lost couldn't find the bus stop or route",
    characteristic: "symbolic",
  },
];

// Emotion color mapping
const emotionColors = {
  "Anxious/Stressed": "#ff6b6b",
  "Confused/Disoriented": "#a8b5ff",
  "Happy/Relieved": "#51cf66",
  "Fearful/Threatened": "#ff9f43",
  "Surprised/Curious": "#ffd93d",
  "Adventurous/fun": "#ffd93d",
  "In love": "#ff6b9d",
  Shock: "#ff4757",
  "Sad/Lonely": "#5f27cd",
};

// Dream particle class
class DreamStar {
  constructor(data, index, total) {
    this.data = data;
    this.color = emotionColors[data.emotion];

    // Position in constellation based on emotion clusters
    let angle = (index / total) * TWO_PI + random(-0.3, 0.3);
    let radius = 150 + random(50, 250);

    // Adjust position based on emotion type for clustering
    if (data.emotion.includes("Anxious")) {
      angle += PI * 0.3;
      radius += 50;
    } else if (data.emotion.includes("Happy")) {
      angle -= PI * 0.3;
      radius -= 30;
    }

    this.targetX = width / 2 + cos(angle) * radius;
    this.targetY = height / 2 + sin(angle) * radius;

    this.x = width / 2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;

    this.size = 8;
    this.glowSize = 20;
    this.hovered = false;

    // Pulsing animation
    this.pulseOffset = random(TWO_PI);
    this.pulseSpeed = random(0.02, 0.04);
  }

  update() {
    // Smooth movement to target position
    let dx = this.targetX - this.x;
    let dy = this.targetY - this.y;

    this.vx += dx * 0.01;
    this.vy += dy * 0.01;

    this.vx *= 0.9;
    this.vy *= 0.9;

    this.x += this.vx;
    this.y += this.vy;

    // Check hover
    let d = dist(mouseX, mouseY, this.x, this.y);
    this.hovered = d < 15;
  }

  display() {
    push();

    // Glow effect
    let pulse =
      sin(frameCount * this.pulseSpeed + this.pulseOffset) * 0.3 + 0.7;

    if (this.hovered) {
      // Enhanced glow when hovered
      for (let i = 3; i > 0; i--) {
        fill(red(this.color), green(this.color), blue(this.color), 30 / i);
        noStroke();
        circle(this.x, this.y, this.glowSize * i * 1.5);
      }
    } else {
      // Normal glow
      fill(red(this.color), green(this.color), blue(this.color), 20 * pulse);
      noStroke();
      circle(this.x, this.y, this.glowSize * pulse);
    }

    // Core star
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.size * (this.hovered ? 1.5 : 1));

    // Twinkle effect
    if (random() < 0.02) {
      stroke(255, 200);
      strokeWeight(1);
      line(this.x - 10, this.y, this.x + 10, this.y);
      line(this.x, this.y - 10, this.x, this.y + 10);
    }

    pop();
  }

  isHovered() {
    return this.hovered;
  }
}

// Global variables
let stars = [];
let connections = [];
let currentHoveredStar = null;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas-container");

  // Create stars from dream data
  dreamData.forEach((dream, index) => {
    stars.push(new DreamStar(dream, index, dreamData.length));
  });

  // Create connections between nearby stars
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      if (random() < 0.15) {
        // 15% chance of connection
        connections.push([i, j]);
      }
    }
  }
}

function draw() {
  background(10, 14, 39);

  // Draw connections
  stroke(255, 255, 255, 15);
  strokeWeight(1);
  connections.forEach(([i, j]) => {
    let s1 = stars[i];
    let s2 = stars[j];
    let d = dist(s1.x, s1.y, s2.x, s2.y);
    if (d < 300) {
      let alpha = map(d, 0, 300, 30, 5);
      stroke(255, 255, 255, alpha);
      line(s1.x, s1.y, s2.x, s2.y);
    }
  });

  // Update and display stars
  let hoveredStar = null;
  stars.forEach((star) => {
    star.update();
    star.display();
    if (star.isHovered()) {
      hoveredStar = star;
    }
  });

  // Update detail panel
  if (hoveredStar && hoveredStar !== currentHoveredStar) {
    showDreamDetail(hoveredStar.data);
    currentHoveredStar = hoveredStar;
  } else if (!hoveredStar && currentHoveredStar) {
    hideDreamDetail();
    currentHoveredStar = null;
  }
}

function showDreamDetail(dream) {
  const detailPanel = document.getElementById("dream-detail");
  document.getElementById("detail-title").textContent = dream.description;
  document.getElementById(
    "detail-emotion"
  ).textContent = `Emotion: ${dream.emotion}`;
  document.getElementById("detail-content").textContent = `"${dream.content}"`;

  // Show dream name if it exists
  const nameElement = document.getElementById("detail-name");
  if (dream.name) {
    nameElement.textContent = `Dream Name: "${dream.name}"`;
    nameElement.style.display = "block";
  } else {
    nameElement.style.display = "none";
  }

  detailPanel.classList.add("visible");
}

function hideDreamDetail() {
  const detailPanel = document.getElementById("dream-detail");
  detailPanel.classList.remove("visible");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Recalculate star positions
  stars.forEach((star, index) => {
    let angle = (index / stars.length) * TWO_PI + random(-0.3, 0.3);
    let radius = 150 + random(50, 250);

    if (star.data.emotion.includes("Anxious")) {
      angle += PI * 0.3;
      radius += 50;
    } else if (star.data.emotion.includes("Happy")) {
      angle -= PI * 0.3;
      radius -= 30;
    }

    star.targetX = width / 2 + cos(angle) * radius;
    star.targetY = height / 2 + sin(angle) * radius;
  });
}
