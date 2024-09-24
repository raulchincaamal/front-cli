import { CaseConverter } from "../constants"

export default class StringUtility {
  /**
   * Helper method for {@link CaseConverter} to convert text into the proper case.
   *
   * ```
   * StringUtility.toCase('livesDown_by-the.River', CaseConverter.PascalCase);
   * // 'LivesDownByTheRiver'
   * ```
   */
  public static toCase(str: string, caseType: CaseConverter): string {
    switch (caseType) {
      case CaseConverter.CamelCase:
        return StringUtility.toCamelCase(str)
      case CaseConverter.ConstantCase:
        return StringUtility.toConstantCase(str)
      case CaseConverter.DotCase:
        return StringUtility.toSentence(str, ".")
      case CaseConverter.KebabCase:
        return StringUtility.toSentence(str, "-")
      case CaseConverter.LowerCase:
        return StringUtility.toSentence(str, "")
      case CaseConverter.PascalCase:
        return StringUtility.toPascalCase(str)
      case CaseConverter.PathCase:
        return StringUtility.toSentence(str, "/")
      case CaseConverter.SentenceCase:
        return StringUtility.toSentenceCase(str)
      case CaseConverter.SnakeCase:
        return StringUtility.toSentence(str, "_")
      case CaseConverter.TitleCase:
        return StringUtility.toTitleCase(str)
      case CaseConverter.None:
      default:
        return str
    }
  }

  /**
   * Converts a string to a sentence case string.
   *
   * ```
   * StringUtility.toSentence('livesDown_by-the.River');
   * // 'lives down by the river'
   *
   * StringUtility.toSentence('livesDown_by-the.River', '-');
   * // 'lives-down-by-the-river'
   *
   * StringUtility.toSentence('livesDown_by-the.River', '_');
   * // 'lives_down_by_the_river'
   *
   * StringUtility.toSentence('livesDown_by-the.River', '/');
   * // 'lives/down/by/the/river'
   * ```
   */
  public static toSentence(str: string, separator: string = " "): string {
    return (
      String(str)
        // Add a space after any digits.
        .replace(/(\d+)/g, " $1 ")
        // Add a space before any upper case characters.
        .replace(/([a-z](?=[A-Z]))/g, "$1 ")
        // Remove all non-word characters and replace with a single space.
        .replace(/[^a-zA-Z0-9 ]/g, " ")
        // Replace multiple Spaces with a single space.
        .replace(/\s+/g, " ")
        // Trim whitespace around the string.
        .replace(/^ | $/g, "")
        // Lower case the entire string.
        .toLowerCase()
        // If a separator is passed in then replace the space with it.
        .replace(/\s+/g, separator)
    )
  }

  /**
   * Converts a string to a camel case string.
   *
   * ```
   * StringUtility.toCamelCase('livesDown_by-the.River');
   * // 'livesDownByTheRiver'
   * ```
   */
  public static toCamelCase(str: string): string {
    return (
      StringUtility.toSentence(str)
        // Replace spaces between words with a string upper cased character.
        .replace(/ (\w)/g, (_: unknown, $1: string) => {
          return $1.toUpperCase()
        })
    )
  }

  /**
   * Converts a hyphen string to a pascal case string.
   *
   * ```
   * StringUtility.toPascalCase('livesDown_by-the.River');
   * // 'LivesDownByTheRiver'
   * ```
   */
  public static toPascalCase(str: string): string {
    return (
      StringUtility.toCamelCase(str)
        // Make first character uppercase.
        .replace(/^[a-zA-Z]/, (a: string, b: unknown, c: unknown) => {
          return a.toUpperCase()
        })
    )
  }

  /**
   * Converts a string to a constant case string.
   *
   * ```
   * StringUtility.toConstantCase('livesDown_by-the.River');
   * // 'LIVES_DOWN_BY_THE_RIVER'
   * ```
   */
  public static toConstantCase(str: string): string {
    return StringUtility.toSentence(str, "_").toUpperCase()
  }

  /**
   * Converts a string to a title case string.
   *
   * ```
   * StringUtility.toTitleCase('livesDown_by-the.River');
   * // 'Lives Down By The River'
   * ```
   */
  public static toTitleCase(str: string): string {
    return StringUtility.toSentence(str).replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    })
  }

  /**
   * Converts a string to a sentence case string.
   *
   * ```
   * StringUtility.toSentenceCase('livesDown_by-the.River');
   * // 'Lives down by the river'
   * ```
   */
  public static toSentenceCase(str: string): string {
    const sentence: string = StringUtility.toSentence(str)

    return (
      sentence.charAt(0).toUpperCase() + sentence.substring(1).toLowerCase()
    )
  }

  /**
   * Determines if the value is a string value
   *
   * ```
   * StringUtility.isString('livesDown_by-the.River');
   * // true
   * ```
   */
  public static isString(value: unknown): value is string {
    return typeof value === "string"
  }
}
