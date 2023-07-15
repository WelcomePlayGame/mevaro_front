export const sendOrderToTelegram = (orderData) => {
  const botToken = "6223153005:AAELW8PsEdCcfYCz4l2uHw6KHVaj1EIKjN4";
  const chatId = "Mevaro";

  const message = `Новый заказ:\n\nИмя: ${orderData.name}\nТелефон: ${orderData.phone}\nПродукт: ${orderData.product}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        console.log("Заказ успешно отправлен в Telegram!");
      } else {
        throw new Error("Ошибка при отправке заказа в Telegram");
      }
    })
    .catch((error) => {
      console.error("Ошибка при отправке заказа в Telegram:", error);
    });
};
