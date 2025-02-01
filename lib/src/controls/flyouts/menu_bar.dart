import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter/foundation.dart';

/// Represents a top-level menu in a [MenuBar] control.
class MenuBarItem {
  /// The text label of the menu.
  final String title;

  /// The collection of commands for this item.
  final List<MenuFlyoutItemBase> items;

  /// Creates a menu bar item.
  const MenuBarItem({
    required this.title,
    required this.items,
  });

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! MenuBarItem) return false;
    return title == other.title && items == other.items;
  }

  @override
  int get hashCode => Object.hash(title, items);
}

/// Use a Menu Bar to show a set of multiple top-level menus in a horizontal row.
///
/// ![MenuBar example](https://learn.microsoft.com/en-us/windows/apps/design/controls/images/menu-bar-submenu.png)
///
/// See also:
///
///  * <https://learn.microsoft.com/en-us/windows/apps/design/controls/menus#create-a-menu-bar>
///  * <https://bdlukaa.github.io/fluent_ui/#/popups/menu_bar>
///  * [MenuBarItem], the items used in this menu bar
///  * [MenuFlyout], a popup that shows a list of items
///  * [CommandBar], a toolbar that provides a customizable layout for commands
class MenuBar extends StatefulWidget with Diagnosticable {
  final List<MenuBarItem> items;

  /// Creates a fluent-styled menu bar.
  MenuBar({
    super.key,
    required this.items,
  }) : assert(items.isNotEmpty, 'items must not be empty');

  @override
  State<MenuBar> createState() => _MenuBarState();

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(IterableProperty<MenuBarItem>('items', items));
  }
}

class _MenuBarState extends State<MenuBar> {
  final _controller = FlyoutController();

  static const barPadding = EdgeInsetsDirectional.symmetric(
    horizontal: 10.0,
    vertical: 4.0,
  );
  static const barMargin = EdgeInsetsDirectional.all(4.0);

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  bool _locked = false;
  MenuBarItem? _currentOpenItem;
  Future<void> _showFlyout(BuildContext context, [MenuBarItem? item]) async {
    if (_locked) return;
    _locked = true;
    final textDirection = Directionality.of(context);
    item ??= widget.items.first;

    // Checks the position of the item itself. Context is the MenuBarItem button.
    // Position needs to be checked before the flyout is closed, otherwise an
    // error will be thrown.
    final RenderBox renderBox = context.findRenderObject() as RenderBox;
    final position = renderBox.localToGlobal(
      Offset.zero,
      ancestor: this.context.findRenderObject(),
    );
    if (_controller.isOpen) {
      _controller.close();
      if (_currentOpenItem == item) {
        _currentOpenItem = null;
        return;
      }
      // Waits for the reverse transition duration.
      //
      // Even though the duration is zero, it is necessary to wait for the
      // transition to finish before showing the next flyout. Otherwise, the
      // flyout will fail to show due to [_locked]. This has a similar effect
      // to moving this task to the next frame or using a [Future.microtask].
      await Future.delayed(Duration.zero);
    }

    _locked = false;
    _currentOpenItem = item;
    final resolvedBarMargin = barMargin.resolve(textDirection);
    final future = _controller.showFlyout(
      buildTarget: true,
      placementMode: FlyoutPlacementMode.auto,
      autoModeConfiguration: FlyoutAutoConfiguration(
        preferredMode: FlyoutPlacementMode.bottomLeft.resolve(textDirection),
      ),
      additionalOffset: 0.0,
      horizontalOffset: position.dx + resolvedBarMargin.left,
      reverseTransitionDuration: Duration.zero,
      barrierColor: Colors.transparent,
      builder: (context) {
        return MenuFlyout(items: item!.items);
      },
    );
    setState(() {});
    await future;
    if (mounted) setState(() {});
    _currentOpenItem = null;
  }

  @override
  Widget build(BuildContext context) {
    assert(debugCheckHasFluentTheme(context));
    assert(debugCheckHasDirectionality(context));

    final theme = FluentTheme.of(context);

    return Container(
      height: 40.0,
      padding: EdgeInsetsDirectional.only(
        top: barMargin.top,
        bottom: barMargin.bottom,
      ),
      // align to the center so that the flyout is directly connected to the buttons
      // not the bar.
      alignment: AlignmentDirectional.centerStart,
      child: FlyoutTarget(
        controller: _controller,
        child: Row(children: [
          for (final item in widget.items)
            Builder(
              key: ValueKey(item),
              builder: (context) {
                return HoverButton(
                  onPressed: () {
                    _locked = false;
                    _showFlyout(context, item);
                  },
                  onPointerEnter: _controller.isOpen
                      ? (_) {
                          if (_currentOpenItem != item) {
                            _showFlyout(context, item);
                          }
                        }
                      : null,
                  builder: (context, states) {
                    return Container(
                      padding: barPadding,
                      margin: EdgeInsetsDirectional.only(
                        start: barMargin.start,
                        end: barMargin.end,
                      ),
                      decoration: BoxDecoration(
                        color: HyperlinkButton.backgroundColor(theme)
                            .resolve(states),
                        borderRadius: BorderRadius.circular(4.0),
                      ),
                      child: Text(item.title),
                    );
                  },
                );
              },
            ),
        ]),
      ),
    );
  }
}
