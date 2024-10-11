/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createApplicationRouter from "./Application.router";
import createSubscriptionRouter from "./Subscription.router";
import createInvoiceRouter from "./Invoice.router";
import createPaymentMethodRouter from "./PaymentMethod.router";
import createNotificationRouter from "./Notification.router";
import createSupportTicketRouter from "./SupportTicket.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as ApplicationClientType } from "./Application.router";
import { ClientType as SubscriptionClientType } from "./Subscription.router";
import { ClientType as InvoiceClientType } from "./Invoice.router";
import { ClientType as PaymentMethodClientType } from "./PaymentMethod.router";
import { ClientType as NotificationClientType } from "./Notification.router";
import { ClientType as SupportTicketClientType } from "./SupportTicket.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        application: createApplicationRouter(router, procedure),
        subscription: createSubscriptionRouter(router, procedure),
        invoice: createInvoiceRouter(router, procedure),
        paymentMethod: createPaymentMethodRouter(router, procedure),
        notification: createNotificationRouter(router, procedure),
        supportTicket: createSupportTicketRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    application: ApplicationClientType<AppRouter>;
    subscription: SubscriptionClientType<AppRouter>;
    invoice: InvoiceClientType<AppRouter>;
    paymentMethod: PaymentMethodClientType<AppRouter>;
    notification: NotificationClientType<AppRouter>;
    supportTicket: SupportTicketClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
}