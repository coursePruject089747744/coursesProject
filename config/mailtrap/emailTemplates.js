export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>אימות כתובת האימייל שלך</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; direction: rtl; text-align: right;">
  <div style="background: linear-gradient(to left, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">אימות כתובת האימייל שלך</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>שלום,</p>
    <p>תודה שנרשמת! קוד האימות שלך הוא:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>הזן את הקוד הזה בעמוד האימות כדי להשלים את תהליך ההרשמה.</p>
    <p>קוד זה יפוג בעוד 15 דקות מטעמי אבטחה.</p>
    <p>אם לא יצרת חשבון אצלנו, אנא התעלם ממייל זה.</p>
    <p>בברכה,<br>צוות האפליקציה שלך</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>זהו מייל אוטומטי, אנא אל תענה למייל זה.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ברוך הבא לאתר שלנו</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; direction: rtl; text-align: right;">
  <div style="background: linear-gradient(to left, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">ברוך הבא ל- {companyName}</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>שלום {userName},</p>
    <p>אנו שמחים להודיעך שההרשמה שלך ל-{companyName} הושלמה בהצלחה!</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>תודה שהצטרפת אלינו! אנו נרגשים שתהיה חלק מהקהילה שלנו.</p>
    <p>כדי להתחיל, התחבר לחשבונך והתחל ליהנות מהשירותים והיתרונות שאנו מציעים.</p>
    <p>אם יש לך שאלות או שאתה זקוק לעזרה, צוות התמיכה שלנו כאן עבורך תמיד.</p>
    <p>בברכה,<br>צוות {companyName}</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>זהו מייל אוטומטי, אנא אל תענה למייל זה.</p>
  </div>
</body>
</html>
`

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>איפוס הסיסמה הושלם בהצלחה</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; direction: rtl; text-align: right;">
  <div style="background: linear-gradient(to left, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">איפוס הסיסמה הושלם בהצלחה</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>שלום,</p>
    <p>אנו שולחים לך הודעה זו כדי לאשר שהסיסמה שלך אופסה בהצלחה.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>אם לא יזמת את תהליך איפוס הסיסמה, אנא צור קשר עם צוות התמיכה שלנו באופן מיידי.</p>
    <p>מטעמי אבטחה, אנו ממליצים:</p>
    <ul>
      <li>להשתמש בסיסמה חזקה וייחודית</li>
      <li>להפעיל אימות דו-שלבי אם הוא זמין</li>
      <li>להימנע משימוש באותה סיסמה באתרים מרובים</li>
    </ul>
    <p>תודה על שיתוף הפעולה בשמירה על אבטחת החשבון שלך.</p>
    <p>בברכה,<br>צוות האפליקציה שלך</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>זהו מייל אוטומטי, אנא אל תענה למייל זה.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>איפוס סיסמה</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; direction: rtl; text-align: right;">
  <div style="background: linear-gradient(to left, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">איפוס סיסמה</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>שלום,</p>
    <p>קיבלנו בקשה לאיפוס הסיסמה שלך. אם לא שלחת את הבקשה הזו, אנא התעלם ממייל זה.</p>
    <p>כדי לאפס את הסיסמה שלך, לחץ על הכפתור הבא:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">אפס סיסמה</a>
    </div>
    <p>קישור זה יפוג בעוד שעה אחת מטעמי אבטחה.</p>
    <p>בברכה,<br>צוות האפליקציה שלך</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>זהו מייל אוטומטי, אנא אל תענה למייל זה.</p>
  </div>
</body>
</html>
`;