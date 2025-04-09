import { Router } from 'express';

import { AccountsRoute } from '../http/modules/accounts/route';
import { AuthRoute } from '../http/modules/auth/route';
import { BudgetsRoute } from '../http/modules/budgets/route';
import { CategoriesRoute } from '../http/modules/categories/route';
import { FeedbacksRoute } from '../http/modules/feedbacks/route';
import { TransactionsRoute } from '../http/modules/transactions/route';
import { UsersRoute } from '../http/modules/users/route';

export const api = Router();

api.use('/auth', AuthRoute);
api.use('/budgets', BudgetsRoute);
api.use('/accounts', AccountsRoute);
api.use('/feedbacks', FeedbacksRoute);
api.use('/categories', CategoriesRoute);
api.use('/transactions', TransactionsRoute);
api.use('/users', UsersRoute);
