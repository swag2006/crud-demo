// ~/services/bookService.ts
import axios from 'axios';

export interface Book {
  id: number;
  title: string;
  author: string;
}

export interface NewBook {
  title: string;
  author: string;
}

const API_BASE_URL = 'http://localhost:8080/api/books';

export const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get<Book[]>(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const createBook = async (newBook: NewBook): Promise<Book> => {
  try {
    const response = await axios.post<Book>(API_BASE_URL, newBook);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const removeBook = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};