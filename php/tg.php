<?php

// Замените 'YOUR_BOT_TOKEN' на ваш токен бота от BotFather в Telegram
$telegramBotToken = '7111598350:AAFveo49waVj7RWvBlsMP00YyxcKIKch3Jk';

// Получаем данные из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $quest = $_POST["quest"];

    // Отправляем данные в Telegram
    $telegramMessage = "shandra.online:\n\n";
    $telegramMessage .= "Имя: " . $name . "\n";
    $telegramMessage .= "Телефон: " . $phone . "\n";
    if (isset ($quest)) {
        $telegramMessage .= "Вопрос: " . $quest . "\n";
    }

    $telegramApiUrl = "https://api.telegram.org/bot" . $telegramBotToken . "/sendMessage";

    // Формируем параметры для POST-запроса
    $postData = array(
        'chat_id' => '-1002039904442', // Замените на имя вашего канала или группы
        'text' => $telegramMessage
    );


    // Отправляем POST-запрос в Telegram Bot API с помощью cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $telegramApiUrl);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Обрабатываем ответ от Telegram (опционально)
    // Можно добавить логику для обработки ответа, например, чтобы уведомить пользователя об успешной отправке или об ошибке.
    $messageSent = false;
    if ($httpCode == 200) {
        // The message was successfully sent
        $messageSent = true;
        echo json_encode(array('success' => true));
    } else {
        false;
    }
    exit();
}
?>