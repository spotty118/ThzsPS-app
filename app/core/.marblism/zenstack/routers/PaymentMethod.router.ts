/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PaymentMethodInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentMethod.createMany(input as any))),

        create: procedure.input($Schema.PaymentMethodInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentMethod.create(input as any))),

        deleteMany: procedure.input($Schema.PaymentMethodInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentMethod.deleteMany(input as any))),

        delete: procedure.input($Schema.PaymentMethodInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentMethod.delete(input as any))),

        findFirst: procedure.input($Schema.PaymentMethodInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).paymentMethod.findFirst(input as any))),

        findMany: procedure.input($Schema.PaymentMethodInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).paymentMethod.findMany(input as any))),

        findUnique: procedure.input($Schema.PaymentMethodInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).paymentMethod.findUnique(input as any))),

        updateMany: procedure.input($Schema.PaymentMethodInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentMethod.updateMany(input as any))),

        update: procedure.input($Schema.PaymentMethodInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentMethod.update(input as any))),

        count: procedure.input($Schema.PaymentMethodInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).paymentMethod.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PaymentMethodCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentMethodCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentMethodCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentMethodCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PaymentMethodCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentMethodCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentMethodGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentMethodGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentMethodCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentMethodCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentMethodGetPayload<T>, Context>) => Promise<Prisma.PaymentMethodGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PaymentMethodDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentMethodDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentMethodDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentMethodDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PaymentMethodDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentMethodDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentMethodGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentMethodGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentMethodDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentMethodDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentMethodGetPayload<T>, Context>) => Promise<Prisma.PaymentMethodGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PaymentMethodFindFirstArgs, TData = Prisma.PaymentMethodGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PaymentMethodFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaymentMethodGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentMethodFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PaymentMethodFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaymentMethodGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaymentMethodGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PaymentMethodFindManyArgs, TData = Array<Prisma.PaymentMethodGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PaymentMethodFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PaymentMethodGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentMethodFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PaymentMethodFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PaymentMethodGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PaymentMethodGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PaymentMethodFindUniqueArgs, TData = Prisma.PaymentMethodGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentMethodFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaymentMethodGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentMethodFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentMethodFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaymentMethodGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaymentMethodGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PaymentMethodUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentMethodUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentMethodUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentMethodUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PaymentMethodUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentMethodUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentMethodGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentMethodGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentMethodUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentMethodUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentMethodGetPayload<T>, Context>) => Promise<Prisma.PaymentMethodGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PaymentMethodCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PaymentMethodCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PaymentMethodCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PaymentMethodCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PaymentMethodCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PaymentMethodCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PaymentMethodCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PaymentMethodCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
