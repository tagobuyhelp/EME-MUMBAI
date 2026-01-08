exports.dynamicMailTemplate = (data, form_name) => {
  if (!data) {
    throw new Error("No valid student data found.");
  }

  const keys = Object.keys(data);
  const values = Object.values(data);

  const dataContent = keys
    .map((key, index) => {
      const value = values[index];
      return `
      <tr>
          <th style="text-align: left; border: 1px solid black; padding: 8px;">${key}</th>
          <td style="border: 1px solid black; padding: 8px;">${value}</td>
        </tr>
    `;
    })
    .join("");

  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Dynamic Email Template</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
</head>

<body style="margin: 0; font-family: 'Poppins', sans-serif; background: #ffffff; font-size: 14px;">
    <div style="
        max-width: 750px;
        margin: 0 auto;
        padding: 20px 15px 30px;
        background: #f4f7ff;
        font-size: 14px;
        color: #434343;">
        <header>
            <table style="width: 100%;">
                <tbody>
                    <tr style="height: 0;">
                        <td style="text-align: right;">
                            <span style="font-size: 16px; line-height: 30px; color: #434343;">
                                ${new Date().toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </header>
         <main>
            <div>
                <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                    <h1 style="
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                color: #1f1f1f;
              ">
                        Student Details from ${form_name}
                    </h1>
                  
                  <table style="
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                        text-align: left;
                        text-color:white;

                    ">
                      
                        <tbody>
                            ${dataContent}
                        </tbody>
                    </table>
                </div>
            </div>

           
        </main>
       
    </div>
</body>

</html>`;
};
