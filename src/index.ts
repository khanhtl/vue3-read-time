import { type App } from "vue";
export interface ReadTimeConfiguration {
  wordsPerMinute: number;
  readTimeCalculated: (time: string) => void;
}

interface ReadTimeBinding {
  value:  ReadTimeConfiguration
}

const readTimeDirective={
  mounted(el: any, binding: ReadTimeBinding) {
      const readTime=calculateReadTime(el.textContent, binding.value.wordsPerMinute);
      const timeString=createTimeString(readTime);
      binding.value.readTimeCalculated(timeString);
  }
}

function calculateReadTime(text: string, wordsPerMinute: number) {
  const wordsCount = text.split(/\s+/g).length;
  const minutes = wordsCount / wordsPerMinute;
  if (minutes < 1) return 0;
  return Math.ceil(minutes);
}

function createTimeString(timeInMinutes: number) {
  if (timeInMinutes < 1) {
    return '< 1 minute';
  } else if (timeInMinutes === 1) {
    return '1 minute';
  } else {
    return `${timeInMinutes} minutes`;
  }
}

export const vueReadTime =  {
    install: (app: App<Element>) => {
      app.directive('readTime', readTimeDirective)
    },
};
