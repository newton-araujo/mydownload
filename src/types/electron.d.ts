export {};

declare global {
  interface Window {
    electronAPI: {
      rodarBat: (caminho: string) => void;
    };
  }
}

