CREATE TABLE player(
	player_id serial PRIMARY KEY,
	username VARCHAR(25) UNIQUE NOT NULL,
	email VARCHAR(150) UNIQUE NOT NULL, 
	join_date DATE);


CREATE TABLE levels(
	level_id serial PRIMARY KEY,
	world_name VARCHAR(25) NOT NULL,
	level_name VARCHAR(100) UNIQUE NOT NULL);


CREATE TABLE score(
	score_id serial PRIMARY KEY,
	level_id INT NOT NULL,
    	player_id INT NOT NULL,
    	score_value INT CHECK(score_value > 0),
	score_time date,
    	CONSTRAINT score_level_id_fkey FOREIGN KEY (level_id)
        REFERENCES levels (level_id),
    	CONSTRAINT score_player_id_fkey FOREIGN KEY (player_id)
        REFERENCES player (player_id));
	

INSERT INTO player(account_name, email, join_date)
VALUES 
('TestName','testemail@exampledomain.com',current_date),
('TestName2','testemail2@exampledomain.com',current_date),
('TestName3','testemail3@exampledomain.com',current_date),
('TestName4','testemail4@exampledomain.com',current_date),
('TestName5','testemail5@exampledomain.com',current_date),
('TestName6','testemail6@exampledomain.com',current_date),
('TestName7','testemail7@exampledomain.com',current_date),
('TestName8','testemail8@exampledomain.com',current_date),
('TestName9','testemail9@exampledomain.com',current_date),
('TestName10','testemail10@exampledomain.com',current_date);


INSERT INTO levels(world_name, level_name)
VALUES 
('Starter World','Introduction Level'),
('Starter World','Slightly Harder Level for World 1'),
('Starter World','Medium Difficulty Level for World 1'),
('Starter World','Hard Difficulty Level for World 1'),
('Starter World','Boss Level for World 1'),
('Second World','Introduction Level for World 2'),
('Second World','Slightly Harder Level for World 2'),
('Second World','Medium Difficulty Level for World 2'),
('Second World','Hard Difficulty Level for World 2'),
('Second World','Boss Level for World 2'),
('Final World','Introduction Level for Final World'),
('Final World','Slightly Harder Level for Final World'),
('Final World','Medium Difficulty Level for Final World'),
('Final World','Hard Difficulty Level for Final World'),
('Final World','Final Boss');

INSERT INTO score(level_id, player_id, score_value, score_time)
VALUES 
(1,1,3,current_timestamp),
(1,2,3,current_timestamp),
(2,1,3,current_timestamp),
(2,2,2,current_timestamp),
(3,1,3,current_timestamp),
(4,1,2,current_timestamp),
(3,2,1,current_timestamp),
(1,3,3,current_timestamp),
(5,1,3,current_timestamp),
(6,1,1,current_timestamp);
