type AssistantConfig = {
  [key: string]: string | undefined;
};

export const assistantIds: AssistantConfig = {
  "basic-chat": process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_LENGUA_LITERATURA,
  "function-calling": process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_HISTORIA_CONTEMPORANEO,
  "file-search": process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_DARA,
  all: process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_FILOSOFIA,
};

console.log("Assistant IDs loaded:", assistantIds);

export let assistantId: string = assistantIds["basic-chat"] || "default-basic-id";

export const setAssistantId = (category: keyof AssistantConfig): void => {
  const selectedId = assistantIds[category];
  if (selectedId) {
    assistantId = selectedId;
    console.log(`Updated assistant ID: ${assistantId}`);
  } else {
    console.warn(`Assistant ID for category "${category}" is not defined.`);
  }
};
