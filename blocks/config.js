module.exports = [
    {
        name: "BH1750",
        blocks: [
            {
                xml:
                    `<block type="bh1750">
                        <value name="BH1750SDA">
                            <shadow type="math_number">
                                <field name="NUM">4</field>
                            </shadow>
                        </value>
                        <value name="BH1750SCL">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="bh1750read">
                     </block>`
            }
        ]
    }
];