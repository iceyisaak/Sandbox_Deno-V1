const encoder = new TextEncoder();

const greetText = encoder.encode("Hello Deno\nI'm Isaak");

await Deno.writeFile("greet.txt", greetText);
