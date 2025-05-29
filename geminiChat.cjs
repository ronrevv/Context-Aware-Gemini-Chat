// geminiChat.cjs
const readline = require('readline');
const client = require('./geminiClient.cjs');

function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function main() {
  console.log('Welcome to Context-Aware Gemini Chat!');

  const firstInput = await prompt('You (1st message): ');
  let conversation = [{ role: 'user', content: firstInput }];

  const firstResponse = await client.chat.completions.create({
    model: 'gemini-1.5-flash',
    temperature: 0.7,
    messages: conversation,
  });

  const firstReply = firstResponse.choices[0].message;
  conversation.push(firstReply);
  console.log(`Gemini: ${firstReply.content}`);

  const secondInput = await prompt('You (2nd message): ');
  conversation.push({ role: 'user', content: secondInput });

  const secondResponse = await client.chat.completions.create({
    model: 'gemini-1.5-flash',
    temperature: 0.7,
    messages: conversation,
  });

  const finalReply = secondResponse.choices[0].message;
  console.log(`Gemini: ${finalReply.content}`);
}

main().catch(console.error);
