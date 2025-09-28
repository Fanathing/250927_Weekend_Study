CREATE TABLE users(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(20) NOT NULL UNIQUE KEY,
    user_pw VARCHAR(20) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    gender CHAR(4) DEFAULT "남자",
    created_at DATETIME DEFAULT now()
);

CREATE TABLE boards(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(50) NOT NULL,
    writer VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT,
    hit INT(10) DEFAULT 0,
    created_at DATETIME DEFAULT now(),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE
);