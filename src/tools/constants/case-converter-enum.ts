export enum CaseConverterEnum {
  /**
   *
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__NoCase__
   *
   * // It would output to:
   * Lives down BY the River
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.None;
   * ```
   */
  NoneUnderscore = "NoCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__CamelCase__
   *
   * // It would output to:
   * livesDownByTheRiver
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.CamelCase;
   * ```
   */
  CamelCaseUnderscore = "CamelCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__ConstantCase__
   *
   * // It would output to:
   * LIVES_DOWN_BY_THE_RIVER
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.ConstantCase;
   * ```
   */
  ConstantCaseUnderscore = "ConstantCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__DotCase__
   *
   * // It would output to:
   * lives.down.by.the.river
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.DotCase;
   * ```
   */
  DotCaseUnderscore = "DotCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__KebabCase__
   *
   * // It would output to:
   * lives-down-by-the-river
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.KebabCase;
   * ```
   */
  KebabCaseUnderscore = "KebabCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__LowerCase__
   *
   * // It would output to:
   * livesdownbytheriver
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.LowerCase;
   * ```
   */
  LowerCaseUnderscore = "LowerCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__PascalCase__
   *
   * // It would output to:
   * LivesDownByTheRiver
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.PascalCase;
   * ```
   */
  PascalCaseUnderscore = "PascalCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__PathCase__
   *
   * // It would output to:
   * lives/down/by/the/river
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.PathCase;
   * ```
   */
  PathCaseUnderscore = "PathCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__SentenceCase__
   *
   * // It would output to:
   * Lives down by the river
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.SentenceCase;
   * ```
   */
  SentenceCaseUnderscore = "SentenceCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__SnakeCase__
   *
   * // It would output to:
   * lives_down_by_the_river
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.SnakeCase;
   * ```
   */
  SnakeCaseUnderscore = "SnakeCase__",
  /**
   *
   *  ```
   * // If you entered "Lives down BY the River" for __replacerSlot__
   * __replacerSlot__TitleCase__
   *
   * // It would output to:
   * Lives Down By The River
   * ```
   *
   * Usage:
   *
   * ```
   * CaseConverterEnum.TitleCase;
   * ```
   */
  TitleCaseUnderscore = "TitleCase__",
}
