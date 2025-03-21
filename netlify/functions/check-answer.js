exports.handler = async (event, context) => {
    const correctAnswer = "わたしというこをもうけた";
    const userAnswer = JSON.parse(event.body).answer.trim();

    if (userAnswer === correctAnswer) {
        return {
            statusCode: 200,
            body: JSON.stringify({ result: '正解です！' })
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({ result: '不正解です。もう一度試してください。' })
        };
    }
};