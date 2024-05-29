import { IKeyFeaturesProps } from "./KeyFeatures.dto";

export const KEY_FEATURES_DATA: IKeyFeaturesProps = {
    title: 'Explore Our Key Features',
    description: `Noo Cash is a fintech solution that allows users make payment for  goods purchased by either scanning a QR Code, using their airtime or using secure codes. noocash also offers other amazing features.`,
    services: [
        {
            title: `Send, and Receive Money`,
            description: `
            Our platform offers different ways for you to send and receive money money conveniently without any hassle
            `,
            icon: "/hero/feature-white/send.png"
        },
        {
            title: `Pay Bills`,
            description: `
            Pay bills easily and conveniently on our platform. Pay Internet, Cable TV, or Internet bills.
            `,
            icon: "/hero/feature-white/wallet.png"
        },
        {
            title: `Virtual Cards`,
            description: `
            Get both local and international currency virtual cards, to make easy transactions online, we do not charge you on transactions.
            `,
            icon: "/hero/feature-white/cards.png"
        },
        {
            title: `Create QR Codes`,
            description: `
            Create QR Codes to receive payments easily by assigning QR code to specific user.
            `,
            icon: "/hero/feature-white/qr.png"
        },
        {
            title: `Reward Other Users`,
            description: `
            You can also create QR Codes to reward users on the platform by assigning to specific users.
            `,
            icon: "/hero/feature-white/rewards.png"
        },
        {
            title: `Save, and Invest`,
            description: `
            You can save your money in any african currency on our platform. You can also invest in stocks on our platfom.
            `,
            icon: "/hero/feature-white/save.png"
        }
    ]

}