import type { Context, Next } from 'hono';
import type { CreateTodoInput, UpdateTodoInput } from '../types/index.ts';
import { findById } from '../models/todo.model.js';

export async function validateIdParam(c: Context, next: Next) {
  const id = parseInt(c.req.param('id'));
  if (isNaN(id)) {
    return c.json({ error: 'Invalid ID parameter' }, 400);
  }
  const todo = findById(id);
  if (!todo) {
    return c.json({ error: 'Todo not found' }, 404);
  }
  c.set('todoId', id);
  await next();
}

export async function validateCreateTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();

    if (!body.title || typeof body.title !== 'string') {
      return c.json({ error: 'Title is required and must be a string' }, 400);
    }

    if (body.completed !== undefined && typeof body.completed !== 'boolean') {
      return c.json({ error: 'Completed must be a boolean' }, 400);
    }

    c.set('todoData', body as CreateTodoInput);
    await next();
  } catch (error) {
    return c.json({ error: 'Invalid JSON in request body' }, 400);
  }
}

export async function validateUpdateTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();

    if (!body.title || typeof body.title !== 'string') {
      return c.json({ error: 'Title is required and must be a string' }, 400);
    }

    if (typeof body.completed !== 'boolean') {
      return c.json({ error: 'Completed is required and must be a boolean' }, 400);
    }

    c.set('todoData', body);
    await next();
  } catch (error) {
    return c.json({ error: 'Invalid JSON in request body' }, 400);
  }
}

export async function validatePatchTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();

    if (body.title !== undefined && typeof body.title !== 'string') {
      return c.json({ error: 'Title must be a string' }, 400);
    }

    if (body.completed !== undefined && typeof body.completed !== 'boolean') {
      return c.json({ error: 'Completed must be a boolean' }, 400);
    }

    c.set('todoData', body as UpdateTodoInput);
    await next();
  } catch (error) {
    return c.json({ error: 'Invalid JSON in request body' }, 400);
  }
}
