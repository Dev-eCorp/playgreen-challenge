export interface Sport {
  id: number;
  title: string;
  imagenHome: string;
  imagenHistory: string;
}

export interface isActive {
  isActive: boolean;
}

export interface dbData {
  id: number;
  title: string;
  imagenHome: string;
  imagenHistory: string;
  reaction?: string;
}
