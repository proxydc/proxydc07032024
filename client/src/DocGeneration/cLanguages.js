import {
    Paragraph,
    TextRun,
    AlignmentType,
    TableCell,
    TableRow,
    BorderStyle,
    WidthType,
} from "docx";
import docData from "./tools/DocData";
class cLanguages {
    static getLanguagesTableRow(langs) {
        let tablerow = new TableRow({
            children: [
                new TableCell({
                    children: [
                        docData.getSubTitle("Langages :"),
                    ],
                    borders: {
                        top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                    },
                    width: { size: 32, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: langs.trim(),
                                alignment: AlignmentType.LEFT,
                                font: "Century Gothic",
                                size: 20,
                            }),
                        ],
                        spacing: {
                            line: 250,
                        },
                    }), ],
                    borders: {
                        top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                    },
                    width: { size: 68, type: WidthType.PERCENTAGE },
                })
            ],
        });
        return tablerow;
    }
}
export default cLanguages;