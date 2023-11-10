-- seed-data.sql
INSERT INTO User (Id, userName, password,role,isActive,CreatedDate,CreatedBy)
SELECT '1', 'admin', '12345','admin',true,'10-11-2023','admin'
    WHERE NOT EXISTS (SELECT 1 FROM User WHERE userName= 'admin');

INSERT INTO User (Id, userName, password,role,isActive,CreatedDate,CreatedBy)
SELECT '1', 'user1', '12345','user',true,'10-11-2023','admin'
    WHERE NOT EXISTS (SELECT 1 FROM User WHERE userName= 'admin');

