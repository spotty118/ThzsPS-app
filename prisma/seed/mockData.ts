import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('40335def-b094-4e82-9802-14410fec5e25', '1Jett77@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('33a7dab4-2227-4936-b5ea-19962f76cb6a', '9Dashawn34@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=11', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('053104a9-f06c-4759-8978-8714d0862c30', '17Dewayne15@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b871e1ad-b930-42c2-9455-3e0ce0e59082', '33Kaylie.MacGyver41@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=35', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('190a54d5-ae7e-4f11-a55f-13af6734857a', '41Howard60@gmail.com', 'Michael Johnson', 'https://i.imgur.com/YfJQV5z.png?id=43', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('886394e3-7c4c-4a16-bf7c-08a78e9ce836', '49Pascale_White-Langosh@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b91a43cf-ebe5-4e25-a713-a9206c4d7ea5', '57Jeramie62@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('eee10194-b0ae-427c-b291-981e8fd412da', '65Nelle.Koepp@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=67', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('be05a55a-d928-46f1-93e4-322a22c7af7a', '73Sage_Schamberger@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('5df47cf1-577e-44df-932d-e944d4df00ed', 'Visionary Labs', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('7f9cf581-d85c-42dd-806d-9d50f2f85142', 'NextGen Developers', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('297235fc-a31c-4ac0-abe8-8cef6cfc4a9c', 'Visionary Labs', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('22a20031-e37e-405b-9ad9-77879dbf9829', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d6ec2f41-380d-47c3-b9b6-0ef52ff953b8', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('10c07b43-b312-4b35-b77d-73fbf3703dee', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('fabf49b2-ae9b-4b33-8179-960cf3f47c8a', 'Creative Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('7251195a-7954-465d-b2cd-5be1761fdf21', 'Creative Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('3818d4dd-0b2d-435f-9968-3137bfb04441', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('3a2b54fe-d74d-46e9-98cc-2a49754fbe0a', 'Creative Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('49956279-f75b-4823-be54-232bb9ee6c72', 'Administrator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '297235fc-a31c-4ac0-abe8-8cef6cfc4a9c');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f7407664-1995-45b1-8738-d783818a5079', 'Administrator', '053104a9-f06c-4759-8978-8714d0862c30', '3818d4dd-0b2d-435f-9968-3137bfb04441');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('43b71ce8-d917-4c78-9df4-e9714b94f8e8', 'Developer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd6ec2f41-380d-47c3-b9b6-0ef52ff953b8');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('6e69b22c-24ab-4395-bac6-d4688474e24b', 'Designer', '886394e3-7c4c-4a16-bf7c-08a78e9ce836', '5df47cf1-577e-44df-932d-e944d4df00ed');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c8cf374b-2a6d-470d-aeae-c2f04fdc724e', 'Developer', '190a54d5-ae7e-4f11-a55f-13af6734857a', 'fabf49b2-ae9b-4b33-8179-960cf3f47c8a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('096d79c7-3c4d-4bc1-8100-b28de521d823', 'Designer', 'b91a43cf-ebe5-4e25-a713-a9206c4d7ea5', '297235fc-a31c-4ac0-abe8-8cef6cfc4a9c');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('b8ad66f3-311c-45d4-a0b7-60c6d5de847b', 'Developer', '190a54d5-ae7e-4f11-a55f-13af6734857a', '22a20031-e37e-405b-9ad9-77879dbf9829');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e58bc4ac-e247-486e-9a31-f7839374b41f', 'Project Manager', '40335def-b094-4e82-9802-14410fec5e25', '3818d4dd-0b2d-435f-9968-3137bfb04441');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('4a199035-6bb4-4498-896b-21130ae3648a', 'Project Manager', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3a2b54fe-d74d-46e9-98cc-2a49754fbe0a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fd33c870-668c-42df-8fe1-f05974b35505', 'Tester', '886394e3-7c4c-4a16-bf7c-08a78e9ce836', 'fabf49b2-ae9b-4b33-8179-960cf3f47c8a');

INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('106968e2-ca8d-4b9f-9d10-dc63d17b14bf', 'RecipeSaver', 'A recipe organizer with meal planning features.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '297235fc-a31c-4ac0-abe8-8cef6cfc4a9c');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('48511bef-11e9-4460-abdc-1b6496f887bf', 'TaskMaster Pro', 'A simple notetaking app with cloud sync.', '33a7dab4-2227-4936-b5ea-19962f76cb6a', 'fabf49b2-ae9b-4b33-8179-960cf3f47c8a');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('cd1eb9e2-ffa1-4553-8b54-3db4a18a3b1e', 'TaskMaster Pro', 'A recipe organizer with meal planning features.', '33a7dab4-2227-4936-b5ea-19962f76cb6a', '7f9cf581-d85c-42dd-806d-9d50f2f85142');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('28fcd0f5-108e-4a87-8304-e93aaff2b7b6', 'RecipeSaver', 'A fitness tracking app with workout plans.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3a2b54fe-d74d-46e9-98cc-2a49754fbe0a');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('80019271-4bf0-4ec4-88bc-8ba43da5bf4a', 'BudgetBuddy', 'A comprehensive task management tool for teams.', '33a7dab4-2227-4936-b5ea-19962f76cb6a', '3a2b54fe-d74d-46e9-98cc-2a49754fbe0a');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('64b76ed3-96ea-4061-b396-3a54d3942426', 'BudgetBuddy', 'A fitness tracking app with workout plans.', 'be05a55a-d928-46f1-93e4-322a22c7af7a', '5df47cf1-577e-44df-932d-e944d4df00ed');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('e6666e38-2d28-4662-a193-fd202c316310', 'BudgetBuddy', 'A simple notetaking app with cloud sync.', '33a7dab4-2227-4936-b5ea-19962f76cb6a', 'fabf49b2-ae9b-4b33-8179-960cf3f47c8a');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('e78623f0-d2e3-495f-ba6a-8e0dcc6db2d0', 'FitTrack', 'A comprehensive task management tool for teams.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5df47cf1-577e-44df-932d-e944d4df00ed');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('25a79b58-8dba-4937-9676-7bd8d541b588', 'FitTrack', 'A fitness tracking app with workout plans.', 'b91a43cf-ebe5-4e25-a713-a9206c4d7ea5', '297235fc-a31c-4ac0-abe8-8cef6cfc4a9c');
INSERT INTO "Application" ("id", "name", "description", "userId", "organizationId") VALUES ('1346047d-9f1a-4e94-bfa6-03367b0ec4d7', 'FitTrack', 'An intuitive budgeting app for personal finance.', 'eee10194-b0ae-427c-b291-981e8fd412da', '22a20031-e37e-405b-9ad9-77879dbf9829');

INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('ecfc4acb-aa78-4e2e-bf21-b45bad382412', 'canceled', '2025-06-16T10:07:14.550Z', '2025-05-04T08:51:16.375Z', 'e6666e38-2d28-4662-a193-fd202c316310', '190a54d5-ae7e-4f11-a55f-13af6734857a');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('ffd861f3-8d23-4563-b796-9be11c6f3680', 'canceled', '2025-02-09T08:55:25.359Z', '2024-12-16T23:20:45.500Z', '48511bef-11e9-4460-abdc-1b6496f887bf', 'eee10194-b0ae-427c-b291-981e8fd412da');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('ae04bf61-b9d4-4178-8105-c771fa5d3757', 'inactive', '2024-05-24T04:29:44.737Z', '2024-09-26T02:08:40.462Z', '106968e2-ca8d-4b9f-9d10-dc63d17b14bf', '190a54d5-ae7e-4f11-a55f-13af6734857a');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('d2a793c4-c442-4305-a6e1-d1092b81d410', 'canceled', '2023-12-09T16:16:32.997Z', '2024-11-08T21:30:36.005Z', '106968e2-ca8d-4b9f-9d10-dc63d17b14bf', 'be05a55a-d928-46f1-93e4-322a22c7af7a');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('1d3bca3f-ca19-4c36-9eba-db9fa091d00c', 'pending', '2025-02-20T17:56:48.681Z', '2023-10-15T01:23:57.213Z', '25a79b58-8dba-4937-9676-7bd8d541b588', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('245af07e-da07-43f6-887c-5d1847127b09', 'expired', '2025-03-27T00:35:42.468Z', '2024-09-17T02:27:37.082Z', 'cd1eb9e2-ffa1-4553-8b54-3db4a18a3b1e', '190a54d5-ae7e-4f11-a55f-13af6734857a');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('0d4f3ce2-341f-436b-9e98-afcbaf919bd9', 'canceled', '2024-07-19T15:07:19.992Z', '2025-07-23T19:45:01.181Z', '48511bef-11e9-4460-abdc-1b6496f887bf', 'be05a55a-d928-46f1-93e4-322a22c7af7a');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('34f66a33-79b0-4b22-8f7b-08f7d206d4b7', 'inactive', '2023-11-27T10:53:08.644Z', '2024-09-21T14:28:17.058Z', '25a79b58-8dba-4937-9676-7bd8d541b588', 'b91a43cf-ebe5-4e25-a713-a9206c4d7ea5');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('c2185500-077b-4d52-bcf5-2522bce98fcc', 'expired', '2025-03-28T17:42:37.484Z', '2025-01-03T12:43:00.034Z', '48511bef-11e9-4460-abdc-1b6496f887bf', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "applicationId", "userId") VALUES ('ea20c9a9-768b-4bfa-b16c-ee252690b4d7', 'canceled', '2025-03-08T08:52:23.914Z', '2025-08-31T00:19:25.579Z', '80019271-4bf0-4ec4-88bc-8ba43da5bf4a', '190a54d5-ae7e-4f11-a55f-13af6734857a');

INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('7d9466ea-0028-4bc9-ae50-2d1e2303d576', 3, '2025-06-21T01:01:36.128Z', '2024-12-03T13:58:08.257Z', 'Overdue', 'ecfc4acb-aa78-4e2e-bf21-b45bad382412');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('68d0bf10-86c0-405b-a186-af7a5447a2ac', 960, '2023-12-10T07:19:10.407Z', '2024-05-31T07:53:33.458Z', 'Cancelled', 'd2a793c4-c442-4305-a6e1-d1092b81d410');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('6021d42c-92ae-48cb-9793-e52c0d7078e6', 621, '2025-01-14T02:22:19.747Z', '2025-01-26T19:05:30.349Z', 'Cancelled', 'ffd861f3-8d23-4563-b796-9be11c6f3680');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('2a60dff3-5d14-4f1a-8718-e72bb01dabdf', 929, '2023-11-15T11:22:39.023Z', '2024-04-19T22:09:51.029Z', 'Cancelled', 'ecfc4acb-aa78-4e2e-bf21-b45bad382412');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('071935b4-0cac-4f22-87ab-f93c313eabb6', 607, '2024-01-01T05:28:23.294Z', '2025-02-21T23:21:26.906Z', 'Cancelled', 'c2185500-077b-4d52-bcf5-2522bce98fcc');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('3d2c3e2c-1d17-42a9-ad5f-c4a666fbc2cd', 10, '2024-01-26T18:54:59.137Z', '2023-12-02T16:13:14.322Z', 'Pending', '34f66a33-79b0-4b22-8f7b-08f7d206d4b7');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('282ccdd1-8838-4832-b0ea-0bd0373dbdbc', 799, '2025-01-26T03:38:56.106Z', '2024-06-22T02:11:07.578Z', 'Cancelled', '1d3bca3f-ca19-4c36-9eba-db9fa091d00c');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('722ff566-a08c-4e2a-95d0-be1cca5c2b2f', 969, '2025-05-05T10:07:47.630Z', '2024-12-04T01:03:43.976Z', 'Refunded', '34f66a33-79b0-4b22-8f7b-08f7d206d4b7');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('e57d5b5b-34e4-4486-b35b-898b3dd14b87', 218, '2024-09-11T19:13:55.217Z', '2025-05-06T15:10:47.808Z', 'Refunded', 'ea20c9a9-768b-4bfa-b16c-ee252690b4d7');
INSERT INTO "Invoice" ("id", "amount", "issueDate", "dueDate", "status", "subscriptionId") VALUES ('898b2791-478f-49d6-ad79-357f4c10bd30', 86, '2025-03-15T23:18:30.339Z', '2024-01-27T00:00:04.078Z', 'Pending', '0d4f3ce2-341f-436b-9e98-afcbaf919bd9');

INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('da41bbe5-42e6-4854-9d16-d0542208103d', 'Credit Card', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'b871e1ad-b930-42c2-9455-3e0ce0e59082');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('71753e11-d53e-4ae8-a889-31ad6641bb5e', 'Apple Pay', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'b91a43cf-ebe5-4e25-a713-a9206c4d7ea5');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('aa15917f-4735-4f01-97c7-dcb29c5eb54f', 'Cryptocurrency', 'Apple Pay linked to userexample.com', 'be05a55a-d928-46f1-93e4-322a22c7af7a');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('cf74ace4-0490-4699-bbd7-fab1797da4b5', 'Apple Pay', 'Visa ending in 1234', '40335def-b094-4e82-9802-14410fec5e25');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('d213981d-a44c-4971-ae85-04554b8aaf39', 'Bank Transfer', 'Apple Pay linked to userexample.com', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('5a4657e5-5e16-456e-855f-1cf410a8c249', 'Bank Transfer', 'Bank ABC Bank Account 567890', '053104a9-f06c-4759-8978-8714d0862c30');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('c87d8104-e757-466b-a187-90a0f3a3f58b', 'Apple Pay', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', '886394e3-7c4c-4a16-bf7c-08a78e9ce836');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('dc8b3dc6-521f-4299-9d0f-ac1567b436d8', 'Apple Pay', 'Bank ABC Bank Account 567890', '190a54d5-ae7e-4f11-a55f-13af6734857a');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('d63a5839-6046-4643-8977-38b1b58be6c4', 'Bank Transfer', 'Bank ABC Bank Account 567890', 'eee10194-b0ae-427c-b291-981e8fd412da');
INSERT INTO "PaymentMethod" ("id", "type", "details", "userId") VALUES ('2c654777-afb2-4353-b225-e09fd5cf19f8', 'Bank Transfer', 'Bank ABC Bank Account 567890', 'eee10194-b0ae-427c-b291-981e8fd412da');

INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('600872a3-fb84-4296-a8af-a3ad7121a1ed', 'Your session will expire in 5 minutes.', '2024-02-13T07:21:00.519Z', 'b91a43cf-ebe5-4e25-a713-a9206c4d7ea5');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('3dbf45f2-b5cd-4ae1-8fa3-22645d735371', 'Your session will expire in 5 minutes.', '2024-04-16T16:23:11.805Z', 'b91a43cf-ebe5-4e25-a713-a9206c4d7ea5');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('3da9a559-5f3c-43a8-8e36-de65e1d543f8', 'Your subscription has been successfully renewed.', '2024-10-18T21:10:22.384Z', 'b91a43cf-ebe5-4e25-a713-a9206c4d7ea5');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('e1d8a6f2-445a-4034-8aee-5cf5093ebd3a', 'Your subscription has been successfully renewed.', '2025-02-21T18:16:59.855Z', 'b871e1ad-b930-42c2-9455-3e0ce0e59082');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('98ea9141-003f-4b29-b48d-2fcd9c93d8e8', 'Your container has been terminated due to inactivity.', '2025-06-30T20:35:48.802Z', '053104a9-f06c-4759-8978-8714d0862c30');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('c209b098-f339-4d0c-9ef2-3af1692c08d2', 'Your container has been terminated due to inactivity.', '2025-04-03T01:33:18.462Z', '190a54d5-ae7e-4f11-a55f-13af6734857a');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('0b8689d0-ac83-4112-96e6-59d656a94781', 'Your container has been terminated due to inactivity.', '2024-08-30T15:39:51.843Z', '33a7dab4-2227-4936-b5ea-19962f76cb6a');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('32a1664b-17e4-41ff-a2b0-252c72ff6274', 'New features have been added to your dashboard.', '2023-10-13T00:40:20.416Z', '40335def-b094-4e82-9802-14410fec5e25');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('246b8b5d-af91-45ac-ad37-7c84434dd946', 'Payment failed. Please update your billing information.', '2025-07-07T07:46:53.582Z', '33a7dab4-2227-4936-b5ea-19962f76cb6a');
INSERT INTO "Notification" ("id", "message", "readAt", "userId") VALUES ('38b9d38a-fc27-4ec5-89b7-8722cb917240', 'Your container has been terminated due to inactivity.', '2025-03-15T03:20:55.263Z', '33a7dab4-2227-4936-b5ea-19962f76cb6a');

INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('b986f885-c1b7-4361-937d-6028b81644a8', 'Account Suspension', 'Request to add a dark mode feature.', 'Closed', 'https://i.imgur.com/YfJQV5z.png?id=314', 'b871e1ad-b930-42c2-9455-3e0ce0e59082');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('44243f99-e555-454a-9734-0aa9e92fc86b', 'Payment Failure', 'Request to add a dark mode feature.', 'Pending', 'https://i.imgur.com/YfJQV5z.png?id=319', 'b871e1ad-b930-42c2-9455-3e0ce0e59082');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('0eafe659-373e-42b8-8974-0e368172927d', 'Account Suspension', 'Account suspended without any prior notice.', 'Closed', 'https://i.imgur.com/YfJQV5z.png?id=324', '33a7dab4-2227-4936-b5ea-19962f76cb6a');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('83633568-f9f8-4494-987e-f716000f57a1', 'Bug Report', 'Request to add a dark mode feature.', 'Resolved', 'https://i.imgur.com/YfJQV5z.png?id=329', 'be05a55a-d928-46f1-93e4-322a22c7af7a');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('a2015a49-8254-4093-92c4-cd5bbc2e7acc', 'Feature Request', 'Payment did not go through despite multiple attempts.', 'Resolved', 'https://i.imgur.com/YfJQV5z.png?id=334', '40335def-b094-4e82-9802-14410fec5e25');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('34da4e56-a444-463f-958f-5271e464e235', 'Payment Failure', 'App crashes when clicking on the dashboard.', 'In Progress', 'https://i.imgur.com/YfJQV5z.png?id=339', '40335def-b094-4e82-9802-14410fec5e25');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('d58163a1-9da6-40ad-a987-e401e204bdf8', 'Account Suspension', 'Unable to login with correct credentials.', 'Closed', 'https://i.imgur.com/YfJQV5z.png?id=344', '886394e3-7c4c-4a16-bf7c-08a78e9ce836');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('d6c1d47b-5d40-4a3a-b265-fa7c6575f359', 'Bug Report', 'Account suspended without any prior notice.', 'Closed', 'https://i.imgur.com/YfJQV5z.png?id=349', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('09e41ae0-dfe6-4f63-9efd-2634d710c530', 'Feature Request', 'App crashes when clicking on the dashboard.', 'Pending', 'https://i.imgur.com/YfJQV5z.png?id=354', '190a54d5-ae7e-4f11-a55f-13af6734857a');
INSERT INTO "SupportTicket" ("id", "subject", "description", "status", "attachmentUrl", "userId") VALUES ('830b995e-57c9-43a6-bc87-d15dfc1ac515', 'Feature Request', 'Unable to login with correct credentials.', 'Resolved', 'https://i.imgur.com/YfJQV5z.png?id=359', 'b91a43cf-ebe5-4e25-a713-a9206c4d7ea5');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
