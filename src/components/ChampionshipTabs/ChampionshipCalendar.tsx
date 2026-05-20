import "../../style/championship-calendar.css";

interface ChampionshipCalendarProps {
    dataProximoJogo: string;
}

export default function ChampionshipCalendar({
    dataProximoJogo,
}: ChampionshipCalendarProps) {
    // Função para parsear data de string ISO com suporte a timezone local
    const parseDate = (dateString: string): Date => {
        // Se a string não tiver 'Z' ou offset de timezone, assume-se que é local
        // Caso contrário, JavaScript interpreta como UTC
        return new Date(dateString);
    };

    const gameDate = dataProximoJogo ? parseDate(dataProximoJogo) : null;
    const currentDate = new Date();
    
    const displayDate = gameDate && gameDate.getTime() > currentDate.getTime() ? gameDate : null;
    const isGameDatePassed = gameDate && gameDate.getTime() <= currentDate.getTime() && gameDate !== null;
    
    // Função auxiliar para gerar calendário
    const generateCalendar = (refDate: Date, targetDayHighlight?: number) => {
        const month = refDate.getMonth();
        const year = refDate.getFullYear();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const calendarDays: (number | null)[] = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            calendarDays.push(i);
        }
        
        return { month, year, calendarDays, targetDay: targetDayHighlight };
    };

    // Se há data próxima, mostrar calendário do mês da data
    const primaryCalendar = displayDate 
        ? generateCalendar(displayDate, displayDate.getDate())
        : null;
    
    // Se a data passou, mostrar calendário da data antiga + calendário atual
    const secondaryCalendar = isGameDatePassed 
        ? generateCalendar(gameDate!, gameDate!.getDate())
        : null;
    
    const currentMonthCalendar = isGameDatePassed
        ? generateCalendar(currentDate)
        : null;

    // Meses em português
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Dias da semana
    const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    // Formatar hora se houver data
    const formatarHora = (data: Date) => {
        const hora = String(data.getHours()).padStart(2, '0');
        const minuto = String(data.getMinutes()).padStart(2, '0');
        return `${hora}:${minuto}`;
    };

    // Componente para renderizar um calendário individual
    const renderCalendarGrid = (
        calendarData: ReturnType<typeof generateCalendar>,
        showGameInfo: boolean = false,
        gameDate?: Date | null
    ) => (
        <div className="championship-calendar">
            <h1 className="championship-calendar-title">
                {monthNames[calendarData.month]} de {calendarData.year}
            </h1>

            {/* Cabeçalho com dias da semana */}
            <div className="championship-calendar-header">
                {dayNames.map((day) => (
                    <div key={day} className="championship-calendar-day-name">
                        {day}
                    </div>
                ))}
            </div>

            {/* Grid de dias */}
            <div className="championship-calendar-grid">
                {calendarData.calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`championship-calendar-cell ${
                            day === calendarData.targetDay
                                ? "championship-calendar-cell-active"
                                : ""
                        } ${!day ? "championship-calendar-cell-empty" : ""}`}
                    >
                        {day && (
                            <>
                                <span className="championship-calendar-cell-day">
                                    {day}
                                </span>
                                {day === calendarData.targetDay && gameDate && (
                                    <span className="championship-calendar-cell-time">
                                        {formatarHora(gameDate)}
                                    </span>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Informações do jogo (apenas se solicitado) */}
            {showGameInfo && gameDate && (
                <div className="championship-calendar-info">
                    <h3>Próximo Jogo</h3>
                    <p>
                        <strong>Data:</strong> {gameDate.toLocaleDateString("pt-BR")}
                    </p>
                    <p>
                        <strong>Horário:</strong> {formatarHora(gameDate)}
                    </p>
                </div>
            )}
        </div>
    );

    return (
        <div className="championship-calendar-container">
            {displayDate ? (
                // Caso 1: Data futura - mostrar calendário do próximo jogo
                renderCalendarGrid(primaryCalendar!, true, displayDate)
            ) : isGameDatePassed ? (
                // Caso 2: Data passou - mostrar calendário da última data + calendário atual
                <>
                    <div style={{ marginBottom: "2rem" }}>
                        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Último Jogo</h2>
                        {renderCalendarGrid(secondaryCalendar!, true, gameDate)}
                    </div>
                    <div>
                        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Mês Atual</h2>
                        {renderCalendarGrid(currentMonthCalendar!)}
                    </div>
                </>
            ) : (
                // Caso 3: Sem data - mostrar mês atual
                <div className="championship-calendar">
                    <h1 className="championship-calendar-title">
                        {monthNames[currentDate.getMonth()]} de {currentDate.getFullYear()}
                    </h1>
                    <div className="championship-calendar-no-date">
                        <p>Nenhuma data planejada para o próximo jogo</p>
                    </div>
                </div>
            )}
        </div>
    );
}
