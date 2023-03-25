package com.ipldashboard.repository;

import com.ipldashboard.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Long> {
    public List<Match> getByTeam1OrTeam2OrderByDateDesc(String team1, String team2, Pageable pageable);

    @Query("select m from Match m where (m.team1=:teamName or m.team2=:teamName) and m.date>=:dateStart and m.date<:dateEnd order by date desc")
    public List<Match> getMatchesByTeamBetweenDate(@Param("teamName") String teamName,@Param("dateStart") LocalDate dateStart,@Param("dateEnd") LocalDate dateEnd);

    default public List<Match> getMatchesByTeamName(String teamName, int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, 4));
    }

}
