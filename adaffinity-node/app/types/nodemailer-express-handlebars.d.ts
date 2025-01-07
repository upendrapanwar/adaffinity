declare module 'nodemailer-express-handlebars' {
    import { Transporter } from 'nodemailer';
    interface HandlebarsOptions {
        viewEngine: any;
        viewPath: string;
        extName?: string;
        defaultLayout?: boolean;
    }
    function expressHandlebars(options: HandlebarsOptions): (transporter: Transporter) => void;
    export = expressHandlebars;
}
